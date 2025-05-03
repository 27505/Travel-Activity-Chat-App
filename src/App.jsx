"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ChatContainer from "./components/chat/ChatContainer"
import VisualPane from "./components/visual/VisualPane"
import Header from "./components/layout/Header"
import { activities } from "./data/activities"
import { itinerary } from "./data/itinerary"
import "./styles/index.css"

export default function App() {
  // Chat state
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showVisualPane, setShowVisualPane] = useState(false)
  const [selectedActivities, setSelectedActivities] = useState([])
  const [showItinerary, setShowItinerary] = useState(false)
  const [activeActivity, setActiveActivity] = useState(null)

  // Start conversation
  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages([
            {
              id: 1,
              role: "assistant",
              content:
                "Hi there! 👋 I'm your Japan travel assistant. I see you're planning a 4-day trip to Tokyo and Kyoto for a young couple who loves adventure, culture, and history. How can I help you plan your perfect Japan experience?",
            },
          ])
          setCurrentStep(1)
        }, 2000)
      }, 1000)
    }
  }, [])

  // Handle sending a message
  const handleSendMessage = (text) => {
    if (!text.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Process based on current step
    processUserMessage(text)
  }

  // Process user message based on current step
  const processUserMessage = (text) => {
    let botResponse
    const delay = 1500 + Math.random() * 1000

    setTimeout(() => {
      setIsTyping(false)

      if (currentStep === 1) {
        // After initial greeting, suggest activities
        botResponse = {
          id: Date.now(),
          role: "assistant",
          content:
            "Based on your preferences, I have two exciting activities to suggest that would be perfect for your trip:",
          activities: [activities.tokyo, activities.kyoto],
        }
        setCurrentStep(2)
        setShowVisualPane(true)
      } else if (currentStep === 2) {
        // After activity selection
        if (text.toLowerCase().includes("go-kart") || text.toLowerCase().includes("tokyo")) {
          setSelectedActivities([activities.tokyo])
          setActiveActivity(activities.tokyo)
        } else if (text.toLowerCase().includes("tea") || text.toLowerCase().includes("kyoto")) {
          setSelectedActivities([activities.kyoto])
          setActiveActivity(activities.kyoto)
        } else {
          setSelectedActivities([activities.tokyo, activities.kyoto])
        }

        botResponse = {
          id: Date.now(),
          role: "assistant",
          content: "Great choice! Based on your preferences, here's a suggested 4-day itinerary for your Japan trip:",
          showItinerary: true,
        }
        setCurrentStep(3)
        setShowItinerary(true)
      } else if (currentStep === 3) {
        // After itinerary suggestion
        botResponse = {
          id: Date.now(),
          role: "assistant",
          content:
            "Excellent! Your 4-day Japan adventure is now confirmed. You'll experience the perfect blend of adventure, culture, and history across Tokyo and Kyoto. Is there anything else you'd like to know about your trip?",
        }
        setCurrentStep(4)
      } else if (currentStep === 4) {
        // Final response
        if (text.toLowerCase().includes("transport") || text.toLowerCase().includes("between")) {
          botResponse = {
            id: Date.now(),
            role: "assistant",
            content:
              "For transportation between Tokyo and Kyoto, I recommend taking the Shinkansen (bullet train). It's the fastest option, taking about 2.5 hours. The trains are comfortable, punctual, and offer beautiful views of the Japanese countryside. A one-way ticket costs around ¥13,000 (~$90), but you might want to consider a Japan Rail Pass if you plan to use the train multiple times.",
          }
        } else if (text.toLowerCase().includes("food") || text.toLowerCase().includes("eat")) {
          botResponse = {
            id: Date.now(),
            role: "assistant",
            content:
              "Japan offers amazing culinary experiences! In Tokyo, don't miss trying fresh sushi at Tsukiji Outer Market, ramen in Shinjuku, and street food in Asakusa. In Kyoto, try traditional kaiseki (multi-course) dining, matcha desserts, and Kyoto-style sushi which is often pressed. Both cities have excellent izakayas (Japanese pubs) for evening dining with drinks.",
          }
        } else {
          botResponse = {
            id: Date.now(),
            role: "assistant",
            content:
              "I'm glad I could help plan your Japan adventure! You're going to have an amazing time exploring Tokyo's vibrant energy and Kyoto's traditional charm. If you have any more questions before your trip, feel free to ask. Safe travels and enjoy your journey! 🇯🇵",
          }
        }
        setCurrentStep(5)
      } else {
        // Generic response for any further questions
        botResponse = {
          id: Date.now(),
          role: "assistant",
          content: "I hope you have a wonderful trip to Japan! Is there anything else you'd like to know?",
        }
      }

      setMessages((prev) => [...prev, botResponse])
    }, delay)
  }

  // Suggested responses based on current step
  const getSuggestedResponses = () => {
    if (currentStep === 1) {
      return [
        "I'd love some activity suggestions for our trip!",
        "What activities do you recommend for a young couple?",
        "We're interested in both adventure and culture. What do you suggest?",
      ]
    } else if (currentStep === 2) {
      return [
        "The go-kart tour in Tokyo sounds amazing!",
        "The tea ceremony in Kyoto looks perfect for us.",
        "Both activities look great! Can we do both?",
      ]
    } else if (currentStep === 3) {
      return [
        "This itinerary looks perfect! Let's confirm it.",
        "Can we adjust the itinerary to include more nature activities?",
        "The itinerary looks good. What about food recommendations?",
      ]
    } else if (currentStep === 4) {
      return [
        "What about transportation between Tokyo and Kyoto?",
        "Any food recommendations for our trip?",
        "That's all I need for now. Thank you!",
      ]
    }
    return []
  }

  // Handle activity selection
  const handleActivitySelect = (activity) => {
    setActiveActivity(activity)
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 flex overflow-hidden">
        {/* Chat section - always visible */}
        <div className={`flex flex-col ${showVisualPane ? "w-3/5" : "w-full"} transition-all duration-500`}>
          <ChatContainer
            messages={messages}
            isTyping={isTyping}
            suggestedResponses={getSuggestedResponses()}
            onSendMessage={handleSendMessage}
          />
        </div>

        {/* Visual pane - appears after activity selection */}
        <AnimatePresence>
          {showVisualPane && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "40%", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="border-l border-gray-200 bg-white overflow-hidden"
            >
              <VisualPane
                selectedActivities={selectedActivities}
                activeActivity={activeActivity}
                showItinerary={showItinerary}
                itinerary={itinerary}
                onActivitySelect={handleActivitySelect}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
