export default function AssignedPatients() {
  const patients = [
    { name: "Asanti Olima", condition: "Hypertension" },
    { name: "Marta Tegegne", condition: "Diabetes" },
    { name: "Mesganaw Habtamu", condition: "Asthma" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        Assigned Patients
      </h2>

      <ul className="space-y-4">
        {patients.map((patient, index) => (
          <li key={index} className="border-b pb-3">
            <p className="font-medium">{patient.name}</p>
            <p className="text-sm text-gray-500 mb-2">
              {patient.condition}
            </p>
            <button className="text-sm text-blue-600 hover:underline">
              View Record
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
