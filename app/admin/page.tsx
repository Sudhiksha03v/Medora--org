import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="mx-auto flex max-w-7xl flex-col space-y-14 relative min-h-screen">
      {/* Background elements for consistency */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.02,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 size-[600px] rounded-full bg-green-500/5 blur-3xl"
      />

      <main className="admin-main py-12">
        <section className="w-full space-y-4 relative z-10 mb-10">
          <div className="flex items-center justify-between">
            <h1 className="header text-[32px] md:text-[40px]">Welcome Admin,</h1>
            <Button variant="outline" className="shad-gray-btn h-11 px-6 gap-2 rounded-xl" asChild>
              <Link href="/">
                <Image 
                  src="/assets/icons/arrow.svg"
                  height={20}
                  width={20}
                  alt="back"
                  className="rotate-0"
                  style={{ height: 'auto' }}
                />
                Go Back
              </Link>
            </Button>
          </div>
          <p className="text-dark-700 text-[16px]">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat relative z-10">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
