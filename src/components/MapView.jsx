const MapView = () => {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="relative">
          <img
            src="/map.jpg?height=300&width=600"
            alt="Map of Japan showing Tokyo and Kyoto"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="font-medium text-lg">Japan</h3>
            <p className="text-sm">Tokyo & Kyoto</p>
          </div>
        </div>
  
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">Trip Overview</div>
            <div className="text-sm text-gray-600">4 days</div>
          </div>
  
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <div className="text-sm">Day 1-2: Tokyo</div>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <div className="text-sm">Day 3-4: Kyoto</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default MapView
  