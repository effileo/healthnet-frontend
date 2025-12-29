export default function DoctorStats() {
  const stats = [
    { title: "Today Appointments", value: 8 },
    { title: "Assigned Patients", value: 24 },
    { title: "Pending Reports", value: 5 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border"
        >
          <p className="text-gray-500">{stat.title}</p>
          <h2 className="text-3xl font-bold text-blue-600">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
