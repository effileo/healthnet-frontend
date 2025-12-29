export default function QuickActions() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        Quick Actions
      </h2>

      <div className="flex flex-col gap-3">
        <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Create Diagnosis
        </button>
        <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          New Appointment
        </button>
        <button className="bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">
          View Lab Results
        </button>
      </div>
    </div>
  );
}
