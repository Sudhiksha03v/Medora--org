import Image from "next/image";
import Link from "next/link";
import { FaHome, FaCalendarAlt, FaUser, FaChartBar, FaCogs, FaSignOutAlt, FaClipboardList, FaBell, FaUsersCog } from "react-icons/fa";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  const logoSrc = "/assets/icons/logo-full.png";
  const appointmentsIcon = "/assets/icons/appointments.svg";
  const pendingIcon = "/assets/icons/pending.svg";
  const cancelledIcon = "/assets/icons/cancelled.svg";

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white flex">
      {/* Sidebar with Hoverable Icons */}
      <div className="bg-gray-900 bg-opacity-80 w-20 p-6 flex flex-col items-center justify-center space-y-6 fixed h-full shadow-xl">
        {/* Sidebar Icon Buttons */}
        <div className="text-gray-400 hover:text-white text-2xl p-4 rounded-full transition-all duration-300 transform hover:scale-110">
          <FaHome />
        </div>
        <div className="text-gray-400 hover:text-white text-2xl p-4 rounded-full transition-all duration-300 transform hover:scale-110">
          <FaCalendarAlt />
        </div>
        <div className="text-gray-400 hover:text-white text-2xl p-4 rounded-full transition-all duration-300 transform hover:scale-110">
          <FaUser />
        </div>
        <div className="text-gray-400 hover:text-white text-2xl p-4 rounded-full transition-all duration-300 transform hover:scale-110">
          <FaChartBar />
        </div>
        <div className="text-gray-400 hover:text-white text-2xl p-4 rounded-full transition-all duration-300 transform hover:scale-110">
          <FaClipboardList />
        </div>
        <div className="text-gray-400 hover:text-white text-2xl p-4 rounded-full transition-all duration-300 transform hover:scale-110">
          <FaBell />
        </div>
        <div className="text-gray-400 hover:text-white text-2xl p-4 rounded-full transition-all duration-300 transform hover:scale-110">
          <FaUsersCog />
        </div>
        <div className="text-gray-400 hover:text-white text-2xl p-4 rounded-full transition-all duration-300 transform hover:scale-110">
          <FaSignOutAlt />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12 ml-20">
        {/* Header Section with Logo and Home Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-start space-y-6">
            <Image
              src={logoSrc}
              height={32}
              width={162}
              alt="logo"
              className="h-12 w-fit"
            />
            <h1 className="text-4xl font-extrabold text-gray-100">Welcome back, Admin!</h1>
          </div>

          {/* Home Button and Admin Dashboard Text */}
          <div className="flex items-center space-x-6">
            <span className="text-lg text-gray-300">Medora | Admin Dashboard</span>
            <Link
              href="/"
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <FaHome size={24} />
              <span className="ml-2">Home</span>
            </Link>
          </div>
        </div>

        {/* Subtitle Section */}
        <div className="text-lg text-gray-300 mb-12">
          Manage your appointments and track patient progress.
        </div>

        {/* Stat Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {appointmentsIcon && (
            <StatCard
              type="appointments"
              count={appointments.scheduledCount}
              label="Scheduled appointments"
              icon={appointmentsIcon}
            />
          )}
          {pendingIcon && (
            <StatCard
              type="pending"
              count={appointments.pendingCount}
              label="Pending appointments"
              icon={pendingIcon}
            />
          )}
          {cancelledIcon && (
            <StatCard
              type="cancelled"
              count={appointments.cancelledCount}
              label="Cancelled appointments"
              icon={cancelledIcon}
            />
          )}
        </section>

        {/* Data Table Section with Extra Padding */}
        <section className="p-8 bg-gray-800 rounded-lg shadow-xl mb-8">
          <div className="overflow-x-auto">
            <DataTable columns={columns} data={appointments.documents} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
