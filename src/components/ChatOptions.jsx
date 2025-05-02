"use client"

const ChatOptions = ({ options, onSelect }) => {
  if (!options || options.length === 0) return null

  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className="w-full text-left p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}

export default ChatOptions
