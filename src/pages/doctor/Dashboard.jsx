import DoctorStats from "./components/DoctorStats";
import TodayAppointments from "./components/TodayAppointments";
import AssignedPatients from "./components/AssignedPatients";
import QuickActions from "./components/QuickActions";
import DoctorProfile from "./components/DoctorProfile";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-1">
        Doctor Dashboard
      </h1>
      <p className="text-gray-600 mb-6">
        Overview of today’s activities and assigned patients
      </p>

      {/* Stats */}
      <DoctorStats />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <TodayAppointments />
          <AssignedPatients />
        </div>

        <div className="space-y-6">
          <DoctorProfile />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
