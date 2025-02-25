export const aiPathfindingCode = `local PathfindingService = game:GetService("PathfindingService")
local RunService = game:GetService("RunService")
local Players = game:GetService("Players")

local EnemyAI = {}
EnemyAI.__index = EnemyAI

local RECALCULATION_DISTANCE = 5
local AWARENESS_RADIUS = 30
local HEARING_RADIUS = 20
local SIGHT_RANGE = 40
local SIGHT_ANGLE = math.rad(90)
local MOVEMENT_SPEED = {
    PATROL = 8,
    INVESTIGATE = 12,
    CHASE = 16
}

function EnemyAI.new(enemyModel, spawnLocation)
    local self = setmetatable({}, EnemyAI)
    
    self.model = enemyModel
    self.humanoid = enemyModel:WaitForChild("Humanoid")
    self.rootPart = enemyModel:WaitForChild("HumanoidRootPart")
    self.animator = self.humanoid:WaitForChild("Animator")
    
    self.animations = {
        idle = self.animator:LoadAnimation(enemyModel.Animations.Idle),
        walk = self.animator:LoadAnimation(enemyModel.Animations.Walk),
        run = self.animator:LoadAnimation(enemyModel.Animations.Run),
        attack = self.animator:LoadAnimation(enemyModel.Animations.Attack),
        investigate = self.animator:LoadAnimation(enemyModel.Animations.Investigate)
    }
    
    self.state = "PATROL"
    self.patrolPoints = self:GeneratePatrolPoints(spawnLocation)
    self.currentPatrolIndex = 1
    self.target = nil
    self.lastKnownPosition = nil
    self.investigationTime = 0
    self.sightObscured = false
    
    self.path = nil
    self.waypoints = {}
    self.currentWaypoint = nil
    self.pathRecomputing = false
    
    self.pathParams = {
        AgentRadius = 2,
        AgentHeight = 5,
        AgentCanJump = true,
        AgentCanClimb = true,
        WaypointSpacing = 4
    }
    
    self.debugMode = false
    self.debugParts = {}
    
    self:SetupBehaviors()
    
    return self
end

function EnemyAI:GeneratePatrolPoints(center)
    local points = {}
    local numPoints = math.random(4, 8)
    local radius = math.random(20, 50)
    
    for i = 1, numPoints do
        local angle = (i / numPoints) * math.pi * 2
        local offset = Vector3.new(math.cos(angle) * radius, 0, math.sin(angle) * radius)
        local point = center + offset
        
        local params = RaycastParams.new()
        params.FilterType = Enum.RaycastFilterType.Blacklist
        params.FilterDescendantsInstances = {self.model}
        
        local ray = workspace:Raycast(point + Vector3.new(0, 50, 0), Vector3.new(0, -100, 0), params)
        if ray then
            point = ray.Position
        end
        
        table.insert(points, point)
    end
    
    return points
end

function EnemyAI:SetupBehaviors()
    self.behaviors = {
        PATROL = function(dt)
            if not self.currentWaypoint and #self.waypoints == 0 then
                self:MoveTo(self.patrolPoints[self.currentPatrolIndex])
                
                if self.humanoid.MoveToFinished:Wait(0.1) then
                    self.currentPatrolIndex = (self.currentPatrolIndex % #self.patrolPoints) + 1
                    task.wait(math.random(3, 6))
                end
            end
            
            self.humanoid.WalkSpeed = MOVEMENT_SPEED.PATROL
            self:PlayAnimation("walk")
            
            if self:DetectPlayer() then
                self:ChangeState("CHASE")
            end
        end,
        
        INVESTIGATE = function(dt)
            if self.lastKnownPosition then
                if not self.currentWaypoint and #self.waypoints == 0 then
                    self:MoveTo(self.lastKnownPosition)
                    
                    if (self.rootPart.Position - self.lastKnownPosition).Magnitude < 5 then
                        self.investigationTime = self.investigationTime + dt
                        self:PlayAnimation("investigate")
                        
                        if self.investigationTime > 10 then
                            self.investigationTime = 0
                            self.lastKnownPosition = nil
                            self:ChangeState("PATROL")
                        end
                    end
                end
                
                self.humanoid.WalkSpeed = MOVEMENT_SPEED.INVESTIGATE
                
                if not self.animations.investigate.IsPlaying then
                    self:PlayAnimation("walk")
                end
                
                if self:DetectPlayer() then
                    self:ChangeState("CHASE")
                end
            else
                self:ChangeState("PATROL")
            end
        end,
        
        CHASE = function(dt)
            local player = self:GetNearestPlayer()
            
            if player then
                local character = player.Character
                if character and character:FindFirstChild("HumanoidRootPart") then
                    self.target = character
                    self.lastKnownPosition = character.HumanoidRootPart.Position
                    
                    if not self:CanSeeTarget() then
                        self.sightObscured = true
                        
                        task.delay(3, function()
                            if self.sightObscured and self.state == "CHASE" then
                                self:ChangeState("INVESTIGATE")
                            end
                        end)
                    else
                        self.sightObscured = false
                        self:MoveTo(character.HumanoidRootPart.Position)
                    end
                    
                    if (self.rootPart.Position - character.HumanoidRootPart.Position).Magnitude < 4 then
                        self:PlayAnimation("attack")
                        
                        local humanoid = character:FindFirstChild("Humanoid")
                        if humanoid then
                            humanoid:TakeDamage(20)
                        end
                    else
                        self:PlayAnimation("run")
                    end
                    
                    self.humanoid.WalkSpeed = MOVEMENT_SPEED.CHASE
                else
                    self:ChangeState("INVESTIGATE")
                end
            else
                self:ChangeState("INVESTIGATE")
            end
        end
    }
    
    RunService.Heartbeat:Connect(function(dt)
        if self.behaviors[self.state] then
            self.behaviors[self.state](dt)
        end
        
        self:UpdatePath(dt)
    end)
end

function EnemyAI:ChangeState(newState)
    if newState ~= self.state then
        self.state = newState
        
        self.path = nil
        self.waypoints = {}
        self.currentWaypoint = nil
        
        if self.debugMode then
            print("Enemy state changed to: " .. newState)
        end
    end
end

function EnemyAI:CanSeeTarget()
    if not self.target then return false end
    
    local targetRoot = self.target:FindFirstChild("HumanoidRootPart")
    if not targetRoot then return false end
    
    local distanceToTarget = (targetRoot.Position - self.rootPart.Position).Magnitude
    if distanceToTarget > SIGHT_RANGE then return false end
    
    local lookVector = self.rootPart.CFrame.LookVector
    local directionToTarget = (targetRoot.Position - self.rootPart.Position).Unit
    local dotProduct = lookVector:Dot(directionToTarget)
    
    if dotProduct < math.cos(SIGHT_ANGLE) then return false end
    
    local rayParams = RaycastParams.new()
    rayParams.FilterType = Enum.RaycastFilterType.Blacklist
    rayParams.FilterDescendantsInstances = {self.model, self.target}
    
    local result = workspace:Raycast(
        self.rootPart.Position + Vector3.new(0, 1, 0),
        directionToTarget * distanceToTarget,
        rayParams
    )
    
    return result == nil
end

function EnemyAI:DetectPlayer()
    local nearestPlayer = self:GetNearestPlayer()
    if not nearestPlayer then return false end
    
    local character = nearestPlayer.Character
    if not character or not character:FindFirstChild("HumanoidRootPart") then return false end
    
    local playerRoot = character.HumanoidRootPart
    local distance = (playerRoot.Position - self.rootPart.Position).Magnitude
    
    if distance <= SIGHT_RANGE then
        self.target = character
        
        if self:CanSeeTarget() then
            self.lastKnownPosition = playerRoot.Position
            return true
        end
    end
    
    if distance <= HEARING_RADIUS then
        local playerHumanoid = character:FindFirstChild("Humanoid")
        if playerHumanoid and playerHumanoid.MoveDirection.Magnitude > 0.1 then
            self.lastKnownPosition = playerRoot.Position
            return true
        end
    end
    
    return false
end

function EnemyAI:GetNearestPlayer()
    local nearestDistance = AWARENESS_RADIUS
    local nearestPlayer = nil
    
    for _, player in pairs(Players:GetPlayers()) do
        local character = player.Character
        if character and character:FindFirstChild("HumanoidRootPart") then
            local distance = (character.HumanoidRootPart.Position - self.rootPart.Position).Magnitude
            if distance < nearestDistance then
                nearestDistance = distance
                nearestPlayer = player
            end
        end
    end
    
    return nearestPlayer
end

function EnemyAI:MoveTo(position)
    if self.pathRecomputing then return end
    
    if self.currentWaypoint then
        local distance = (position - self.lastTargetPosition).Magnitude
        if distance < RECALCULATION_DISTANCE then return end
    end
    
    self.pathRecomputing = true
    self.lastTargetPosition = position
    
    local success, errorMessage = pcall(function()
        self.path = PathfindingService:CreatePath(self.pathParams)
        self.path:ComputeAsync(self.rootPart.Position, position)
        
        if self.path.Status == Enum.PathStatus.Success then
            self.waypoints = self.path:GetWaypoints()
            self.currentWaypoint = nil
            
            if #self.waypoints > 0 then
                self.currentWaypoint = self.waypoints[1]
                table.remove(self.waypoints, 1)
            end
        else
            self.humanoid:MoveTo(position)
        end
    end)
    
    if not success and self.debugMode then
        warn("Pathfinding error: " .. tostring(errorMessage))
    end
    
    self.pathRecomputing = false
end

function EnemyAI:UpdatePath(dt)
    if self.currentWaypoint then
        local distance = (self.rootPart.Position - self.currentWaypoint.Position).Magnitude
        
        if self.debugMode then
            self:VisualizeWaypoint(self.currentWaypoint.Position)
        end
        
        self.humanoid:MoveTo(self.currentWaypoint.Position)
        
        if distance < 4 then
            if #self.waypoints > 0 then
                self.currentWaypoint = self.waypoints[1]
                table.remove(self.waypoints, 1)
            else
                self.currentWaypoint = nil
            end
        end
    end
end

function EnemyAI:PlayAnimation(animName)
    if not self.animations[animName] then return end
    
    for name, anim in pairs(self.animations) do
        if name ~= animName and anim.IsPlaying then
            anim:Stop()
        end
    end
    
    if not self.animations[animName].IsPlaying then
        self.animations[animName]:Play()
    end
end

function EnemyAI:VisualizeWaypoint(position)
    local part = self.debugParts[1]
    if not part then
        part = Instance.new("Part")
        part.Anchored = true
        part.CanCollide = false
        part.Size = Vector3.new(1, 1, 1)
        part.Shape = Enum.PartType.Ball
        part.Material = Enum.Material.Neon
        part.Color = Color3.fromRGB(255, 0, 0)
        part.Parent = workspace
        
        table.insert(self.debugParts, part)
    end
    
    part.Position = position
end

function EnemyAI:Destroy()
    for _, part in ipairs(self.debugParts) do
        part:Destroy()
    end
    
    for _, anim in pairs(self.animations) do
        if anim.IsPlaying then
            anim:Stop()
        end
    end
    
    self.path = nil
    self.waypoints = {}
    self.currentWaypoint = nil
    
end

return EnemyAI`; 