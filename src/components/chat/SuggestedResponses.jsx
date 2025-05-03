"use client"

const SuggestedResponses = ({ responses, onSelect }) => {
  if (!responses || responses.length === 0) return null

  return (
    <div className="px-4 md:px-6 py-3 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
        {responses.map((response, index) => (
          <button
            key={index}
            onClick={() => onSelect(response)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
          >
            {response}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SuggestedResponses
