import ActivityCard from "./ActivityCard"
import MapView from "./MapView"

const VisualPanel = ({ selectedActivities, activeActivity }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">Your Japan Adventure</h2>
        <p className="text-sm text-gray-600">Tokyo & Kyoto - 4 Day Trip</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeActivity ? (
          <div className="p-4">
            <ActivityCard activity={activeActivity} expanded={true} />
          </div>
        ) : (
          <div className="p-4">
            <MapView />

            {selectedActivities.length > 0 && (
              <div className="mt-4 space-y-4">
                <h3 className="font-medium text-gray-800">Selected Activities</h3>
                {selectedActivities.map((activity, index) => (
                  <ActivityCard key={index} activity={activity} />
                ))}
              </div>
            )}

            {selectedActivities.length === 0 && (
              <div className="mt-4 text-center text-gray-500 p-6 bg-gray-50 rounded-lg">
                <p>No activities selected yet.</p>
                <p className="text-sm mt-2">Chat with our assistant to discover exciting activities for your trip!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default VisualPanel
