const TypingIndicator = () => {
    return (
      <div className="flex justify-start">
        <div className="max-w-[80%] md:max-w-[70%]">
          <div className="flex items-center mb-1 text-sm text-gray-500">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <span className="text-blue-500 text-xs">🤖</span>
            </div>
            <span>Travel Assistant</span>
          </div>
          <div className="rounded-2xl px-4 py-3 bg-white border border-gray-200 shadow-sm rounded-bl-none">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default TypingIndicator
  