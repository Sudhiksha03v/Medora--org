"use client";

import Image from "next/image";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import { getPatient } from "@/lib/actions/patient.actions";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { useParams, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

const Appointment = () => {
  const params = useParams();
  const userId = params.userId as string;
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      if (userId) {
        const patient = await getPatient(userId);
        setPatient(patient);
      }
    };
    fetchPatient();
  }, [userId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppointmentPage patient={patient} userId={userId} />
    </Suspense>
  );
};

const AppointmentPage = ({ patient, userId }: { patient: any; userId: string | null }) => {
  if (!userId) {
    return <div className="flex-center h-screen bg-dark-300 text-white font-display text-xl">User ID is not available</div>;
  }

  if (!patient) {
    return <div className="flex-center h-screen bg-dark-300 text-white font-display text-xl animate-pulse">Loading patient data...</div>;
  }

  // Only track if patient exists
  if (patient?.name) {
    Sentry.metrics.set("user_view_new-appointment", patient.name);
  }

  return (
    <div className="flex min-h-screen bg-dark-300">
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

      <section className="relative z-10 flex flex-[1.8] flex-col justify-between px-6 py-10 md:px-16 lg:max-w-[65%]">
        <div className="flex flex-col gap-10 my-auto">
          <Link href="/">
            <Image
              src="/assets/icons/logo-full.png"
              height={40}
              width={140}
              alt="Medora"
              className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
              style={{ height: 'auto' }}
            />
          </Link>

          <div className="max-w-[1000px] w-full">
            <AppointmentForm
              patientId={patient?.$id}
              userId={userId}
              type="create"
            />
          </div>
        </div>


      </section>

      {/* Hero Image Side */}
      <div className="hidden lg:block relative flex-1 h-screen sticky top-0 lg:max-w-[35%]">
        <Image
          src="/assets/images/modern-clinic.png"
          fill
          alt="Healthcare background"
          className="object-cover"
          sizes="35vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-300/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300/40 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default Appointment;