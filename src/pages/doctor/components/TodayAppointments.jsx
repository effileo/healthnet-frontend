export default function TodayAppointments() {
  const appointments = [
    { name: "Fita Alemayehu", time: "09:00 AM", status: "Confirmed" },
    { name: "Bekalu Addisu", time: "11:30 AM", status: "Pending" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        Today’s Appointments
      </h2>

      <ul className="space-y-4">
        {appointments.map((appt, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <p className="font-medium">{appt.name}</p>
              <p className="text-sm text-gray-500">{appt.time}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                appt.status === "Confirmed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {appt.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
