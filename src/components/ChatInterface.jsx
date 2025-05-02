"use client"

import ChatMessage from "./ChatMessage"
import ChatOptions from "./ChatOptions"

const ChatInterface = ({ messages, currentStep, chatFlow, onUserResponse, chatEndRef }) => {
  const lastMessageFromUser = messages[messages.length - 1]?.sender === "user"
  const lastMessageFromBot = messages[messages.length - 1]?.sender === "bot"
  const showTyping = currentStep < chatFlow.length && messages.length > 0 && lastMessageFromUser

  return (
    <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      
      {console.log(currentStep, chatFlow.length)}
      
        {showTyping && (
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-500">🤖</span>
            </div>
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
                 
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        {currentStep < chatFlow.length && lastMessageFromBot && (
          <ChatOptions options={chatFlow[currentStep - 1]?.options || []} onSelect={onUserResponse} />
        )}

        {currentStep >= chatFlow.length && (
          <div className="text-center text-gray-500 py-2">
            Your Japan trip is planned! We hope you enjoy your adventure.
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatInterface
