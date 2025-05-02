"use client"

import { useState, useEffect, useRef } from "react"
import ChatInterface from "./components/ChatInterface"
import VisualPanel from "./components/VisualPanel"
import { chatFlow } from "./data/chatFlow"

export default function App() {
  const [messages, setMessages] = useState([])
  const [step, setStep] = useState(0)
  const [activities, setActivities] = useState([])
  const [activeActivity, setActiveActivity] = useState(null)
  const chatEndRef = useRef(null)

  // Initialize chat with first message
  useEffect(() => {
    if (step === 0 && messages.length === 0) {
      const firstMessage = chatFlow[0]?.botMessage
      if (firstMessage) {
        setTimeout(() => {
          setMessages([firstMessage])
          setStep(1)
        }, 1000)
      }
    }
  }, [step, messages.length])

  // Auto-scroll on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleUserResponse = ({ text, activities: newActivities, activeActivity: newActive }) => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: "user", text, timestamp: new Date() }
    ])

    if (newActivities) setActivities((prev) => [...prev, ...newActivities])
    if (newActive) setActiveActivity(newActive)

    const nextMessage = chatFlow[step]?.botMessage
    if (nextMessage) {
      setTimeout(() => {
        setMessages((prev) => [...prev, nextMessage])
        setStep((s) => s + 1)
      }, 1000)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800">Japan Travel Planner</h1>
        </header>

        <ChatInterface
          messages={messages}
          currentStep={step}
          chatFlow={chatFlow}
          onUserResponse={handleUserResponse}
          chatEndRef={chatEndRef}
        />
      </div>

      <div className="w-2/5 border-l border-gray-200">
        <VisualPanel selectedActivities={activities} activeActivity={activeActivity} />
      </div>
    </div>
  )
}
