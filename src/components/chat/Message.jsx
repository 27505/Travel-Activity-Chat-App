"use client"

const Message = ({ message, onActivitySelect }) => {
  const isAssistant = message.role === "assistant"

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-[80%] md:max-w-[70%]`}>
        {isAssistant && (
          <div className="flex items-center mb-1 text-sm text-gray-500">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <span className="text-blue-500 text-xs">🤖</span>
            </div>
            <span>Travel Assistant</span>
          </div>
        )}

        <div
          className={`rounded-2xl px-4 py-3 ${
            isAssistant
              ? "bg-white border border-gray-200 shadow-sm text-gray-800 rounded-bl-none"
              : "bg-blue-500 text-white rounded-br-none"
          }`}
        >
          <p className="whitespace-pre-wrap">{message.content}</p>

          {/* Activity suggestions */}
          {message.activities && (
            <div className="mt-4 space-y-3">
              {message.activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-3 border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
                  onClick={() => onActivitySelect(`I'm interested in the ${activity.name}!`)}
                >
                  <div className="font-medium text-gray-900">{activity.name}</div>
                  <div className="text-sm text-gray-600">{activity.location}</div>
                  <div className="text-sm mt-1 text-gray-700">{activity.shortDescription}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {activity.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Itinerary preview */}
          {message.showItinerary && (
            <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="font-medium text-gray-900">4-Day Japan Itinerary</div>
              <div className="text-sm text-gray-700 mt-2">
                <p>• Days 1-2: Tokyo - Urban adventures & cultural experiences</p>
                <p>• Days 3-4: Kyoto - Traditional Japan & historic sites</p>
              </div>
              <div className="mt-2 text-sm text-blue-500 cursor-pointer">View full itinerary →</div>
            </div>
          )}
        </div>

        {!isAssistant && (
          <div className="flex items-center mt-1 justify-end text-sm text-gray-500">
            <span>You</span>
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center ml-2">
              <span className="text-blue-500 text-xs">👤</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Message
