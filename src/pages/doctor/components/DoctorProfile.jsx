import { useState } from "react";

export default function DoctorProfile() {
  const [formData, setFormData] = useState({
    name: "Dr. Lemi Gobena",
    email: "lemi@healthnet.com",
    phone: "+251 911 234 567",
    address: "Addis Ababa, Ethiopia",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true); // Simulated UPDATE
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        My Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {["name", "email", "phone", "address"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={field}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>

        {saved && (
          <p className="text-green-600 text-sm mt-2">
            ✅ Profile updated successfully
          </p>
        )}
      </form>
    </div>
  );
}
