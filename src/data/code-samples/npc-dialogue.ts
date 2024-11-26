export const npcDialogueCode = `local NPCDialogue = {}
NPCDialogue.__index = NPCDialogue

local TweenService = game:GetService("TweenService")
local Players = game:GetService("Players")

function NPCDialogue.new(dialogueData)
    local self = setmetatable({}, NPCDialogue)
    self.dialogueData = dialogueData
    self.currentNode = nil
    self.isActive = false
    self.ui = nil
    return self
end

function NPCDialogue:Start(player, startNode)
    if self.isActive then return end
    self.isActive = true
    self.currentNode = startNode or self.dialogueData.startNode
    self:ShowDialogue(player)
end

function NPCDialogue:ShowDialogue(player)
    -- Create and show UI
    self.ui = self:CreateDialogueUI()
    self:UpdateDialogueContent()
    self:AnimateUI()
end

function NPCDialogue:HandleChoice(choice)
    if not self.currentNode.choices then return end
    
    local nextNode = self.dialogueData.nodes[choice.nextNode]
    if nextNode then
        self.currentNode = nextNode
        self:UpdateDialogueContent()
    else
        self:End()
    end
end

function NPCDialogue:End()
    self.isActive = false
    if self.ui then
        self.ui:Destroy()
        self.ui = nil
    end
end

return NPCDialogue`; 