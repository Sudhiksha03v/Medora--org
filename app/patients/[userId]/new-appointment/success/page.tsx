import Image from "next/image";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { getUser } from "@/lib/actions/patient.actions";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );
  const user = await getUser(userId);

  Sentry.metrics.set("user_view_appointment-success", user.name);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-6">
      {/* Main Content */}
      <div className="w-full max-w-5xl bg-gray-800 p-8 rounded-xl shadow-2xl flex-1 space-y-8">
        {/* Success GIF on Top */}
        <div className="flex justify-center">
          <Image
            src="/assets/gifs/success.gif"
            height={200}
            width={200}
            alt="success"
            className="rounded-full border-4 border-green-200 shadow-lg"
          />
        </div>

        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-500">
            Appointment Request Successful!
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Your appointment request has been submitted successfully. We’ll
            confirm your appointment and get back to you shortly!
          </p>
        </div>

        {/* Appointment Details Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-200">Appointment Details</h2>
          <div className="flex items-center gap-6">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={80}
              height={80}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-lg font-medium text-gray-300">
                Dr. {doctor?.name}
              </p>
              <p className="text-sm text-gray-400">Primary Physician</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
              className="h-6 w-6"
            />
            <p className="text-lg text-gray-300">
              {formatDateTime(appointment.schedule).dateTime}
            </p>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-blue-400">Next Steps</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-400">
            <li>We’ll review your request and confirm your appointment.</li>
            <li>You’ll receive a confirmation email or SMS.</li>
            <li>Prepare any necessary documents for your visit.</li>
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="mt-8 flex justify-center gap-6">
          <Button
            className="bg-green-500 px-8 py-3 text-lg font-semibold text-white shadow-lg rounded-md transition duration-300 hover:bg-green-600"
            asChild
          >
            <Link href={`/patients/${userId}/new-appointment`}>
              Go Back to Previous Page
            </Link>
          </Button>
          <Button
            className="bg-green-500 px-8 py-3 text-lg font-semibold text-white shadow-lg rounded-md transition duration-300 hover:bg-green-600"
            asChild
          >
            <Link href="/">Request a Fresh Appointment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestSuccess;
