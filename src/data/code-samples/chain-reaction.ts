export const chainReactionCode = `local ChainReaction = {}
ChainReaction.__index = ChainReaction

local React = require(game.ReplicatedStorage.Packages.React)
local e = React.createElement

function ChainReaction.new(props)
    local self = setmetatable({}, ChainReaction)
    self.size = props.size or 5
    self.grid = {}
    self.moves = 0
    self:InitializeGrid()
    return self
end

function ChainReaction:InitializeGrid()
    for i = 1, self.size do
        self.grid[i] = {}
        for j = 1, self.size do
            self.grid[i][j] = false
        end
    end
end

function ChainReaction:ToggleCell(x, y)
    -- Toggle clicked cell and adjacent cells
    self:SetCell(x, y, not self.grid[x][y])
    self:SetCell(x+1, y, not self.grid[x+1][y])
    self:SetCell(x-1, y, not self.grid[x-1][y])
    self:SetCell(x, y+1, not self.grid[x][y+1])
    self:SetCell(x, y-1, not self.grid[x][y-1])
    
    self.moves = self.moves + 1
    self:CheckWinCondition()
end

function ChainReaction:SetCell(x, y, value)
    if x >= 1 and x <= self.size and y >= 1 and y <= self.size then
        self.grid[x][y] = value
    end
end

function ChainReaction:CheckWinCondition()
    for i = 1, self.size do
        for j = 1, self.size do
            if self.grid[i][j] then
                return false
            end
        end
    end
    return true
end

return ChainReaction`; 