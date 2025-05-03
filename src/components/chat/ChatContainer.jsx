"use client"

import { useRef, useEffect } from "react"
import Message from "./Message"
import TypingIndicator from "./TypingIndicator"
import SuggestedResponses from "./SuggestedResponses"
import ChatInput from "./ChatInput"
import { motion } from "framer-motion"

const ChatContainer = ({ messages, isTyping, suggestedResponses, onSendMessage }) => {
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  return (
    <>
      {/* Messages container */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Message message={message} onActivitySelect={onSendMessage} />
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested responses */}
      {suggestedResponses.length > 0 && <SuggestedResponses responses={suggestedResponses} onSelect={onSendMessage} />}

      {/* Input area */}
      <ChatInput onSendMessage={onSendMessage} />
    </>
  )
}

export default ChatContainer
