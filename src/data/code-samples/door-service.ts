export const doorServiceCode = `local DoorService = {}
DoorService.__index = DoorService

local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)
local Promise = require(game:GetService("ReplicatedStorage").Packages.Promise)

function DoorService:KnitStart()
    self.doors = {}
    self:InitializeDoors()
end

function DoorService:InitializeDoors()
    for _, door in ipairs(workspace.Doors:GetChildren()) do
        if door:IsA("Model") then
            self.doors[door.Name] = {
                instance = door,
                isLocked = door:GetAttribute("Locked") or false,
                isOpen = false,
                animation = door:FindFirstChild("AnimationController")
            }
        end
    end
end

function DoorService.Client:InteractWithDoor(player, doorName)
    return Promise.new(function(resolve, reject)
        local door = self.Server.doors[doorName]
        if not door then
            return reject("Door not found")
        end
        
        if door.isLocked then
            return reject("Door is locked")
        end
        
        -- Toggle door state
        door.isOpen = not door.isOpen
        self.Server:AnimateDoor(door)
        resolve(door.isOpen)
    end)
end

function DoorService:AnimateDoor(door)
    if door.animation then
        local track = door.animation:LoadAnimation(
            door.isOpen and self.openAnim or self.closeAnim
        )
        track:Play()
    end
end

return DoorService`; 