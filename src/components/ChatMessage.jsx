const ChatMessage = ({ message }) => {
    const isBot = message.sender === "bot"
  
    return (
      <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
        <div className={`flex items-start max-w-[75%] ${isBot ? "flex-row" : "flex-row-reverse"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 
            ${isBot ? "bg-blue-100 mr-2" : "bg-green-100 ml-2"}`}
          >
            <span className={isBot ? "text-blue-500" : "text-green-500"}>{isBot ? "🤖" : "👤"}</span>
          </div>
  
          <div
            className={`rounded-lg px-4 py-3 ${
              isBot ? "bg-white border border-gray-200 text-gray-800" : "bg-green-500 text-white"
            }`}
          >
            {message.text}
  
            {message.activities && (
              <div className="mt-3 space-y-3">
                {message.activities.map((activity, index) => (
                  <div key={index} className="bg-gray-50 rounded-md p-3 border border-gray-200">
                    <div className="font-medium">{activity.name}</div>
                    <div className="text-sm text-gray-600">{activity.location}</div>
                    <div className="text-sm mt-1">{activity.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  export default ChatMessage
  