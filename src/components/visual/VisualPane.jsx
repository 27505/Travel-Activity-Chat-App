"use client"

import ActivityCard from "./ActivityCard"
import ItineraryView from "./ItineraryView"
import MapView from "./MapView"
import { motion } from "framer-motion"

const VisualPane = ({ selectedActivities, activeActivity, showItinerary, itinerary, onActivitySelect }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Your Japan Adventure</h2>
        <p className="text-sm text-gray-600">Tokyo & Kyoto - 4 Day Trip</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Map view */}
        <MapView />

        {/* Active activity detail */}
        {activeActivity && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <h3 className="text-md font-medium text-gray-800 mb-2">Activity Details</h3>
            <ActivityCard activity={activeActivity} expanded={true} />
          </motion.div>
        )}

        {/* Selected activities */}
        {selectedActivities.length > 0 && !activeActivity && (
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-800 mb-2">Selected Activities</h3>
            <div className="space-y-4">
              {selectedActivities.map((activity, index) => (
                <ActivityCard
                  key={index}
                  activity={activity}
                  onClick={() => onActivitySelect(activity)}
                  compact={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Itinerary */}
        {showItinerary && <ItineraryView itinerary={itinerary} />}
      </div>
    </div>
  )
}

export default VisualPane
