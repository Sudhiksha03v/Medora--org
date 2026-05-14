import Image from "next/image";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { getUser } from "@/lib/actions/patient.actions";

const RequestSuccess = async (props: {
  params: Promise<{ userId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const userId = params.userId;
  const appointmentId = (searchParams?.appointmentId as string) || "";
  
  const appointment = await getAppointment(appointmentId);
  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment?.primaryPhysician
  );
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen bg-dark-300 px-[5%] relative overflow-hidden">
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

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto py-10">
        <Link href="/" className="mb-8">
          <Image
            src="/assets/icons/logo-full.png"
            height={40}
            width={140}
            alt="Medora"
            className="h-8 w-auto opacity-90"
            style={{ height: 'auto' }}
          />
        </Link>

        <section className="flex flex-col items-center mb-8 text-center">
          <Image
            src="/assets/gifs/success.gif"
            height={160}
            width={160}
            alt="success"
            className="mb-6 mix-blend-screen grayscale-[0.5]"
            style={{ height: 'auto' }}
          />
          <h2 className="font-display text-[24px] md:text-[32px] font-bold leading-tight text-white mb-3 max-w-[600px]">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p className="text-[14px] text-dark-600 max-w-[450px] leading-relaxed">
            We&apos;ll be in touch as soon as we confirm the appointment and get back to you!
          </p>
        </section>

        <section className="w-full bg-dark-400 border border-dark-500/60 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-medium text-dark-700 uppercase tracking-widest">Details:</p>
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2.5">
              <Image
                src={doctor?.image || "/assets/icons/user.svg"}
                alt="doctor"
                width={28}
                height={28}
                className="rounded-full border border-dark-500"
                style={{ height: 'auto' }}
              />
              <p className="text-[14px] font-medium text-white">Dr. {doctor?.name || 'Unknown'}</p>
            </div>
            
            <div className="w-px h-5 bg-dark-500/50 hidden md:block" />

            <div className="flex items-center gap-2.5">
              <Image
                src="/assets/icons/calendar.svg"
                height={18}
                width={18}
                alt="calendar"
                style={{ height: 'auto' }}
              />
              <p className="text-[14px] font-medium text-white">
                {formatDateTime(appointment.schedule).dateTime}
              </p>
            </div>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn px-8 h-11 rounded-lg text-[14px] font-semibold" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RequestSuccess;
