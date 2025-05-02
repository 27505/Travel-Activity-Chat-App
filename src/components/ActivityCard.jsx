const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const IconLocation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ActivityCard = ({ activity, expanded }) => {
  const { image, name, location, duration, area, tags, description, recommendation } = activity

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="h-full w-full bg-black bg-opacity-20 flex items-end">
          <div className="p-4 text-white">
            <div className="font-medium text-lg">{name}</div>
            <div className="text-sm opacity-90">{location}</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="mr-3"><IconClock />{duration}</span>
          <span><IconLocation />{area}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">{tag}</span>
          ))}
        </div>

        <p className={`text-gray-700 ${expanded ? "" : "line-clamp-3"}`}>{description}</p>

        {expanded && recommendation && (
          <div className="mt-4">
            <h4 className="font-medium text-gray-800 mb-2">Why we recommend this</h4>
            <p className="text-gray-700">{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivityCard
