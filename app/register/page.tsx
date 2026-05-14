"use client";

import Image from "next/image";
import Link from "next/link";
import { PatientForm } from "@/components/forms/PatientForm";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="flex-center h-screen bg-dark-300 text-white font-display text-xl">Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}

const RegisterForm = () => {
  return (
    <div className="flex h-screen min-h-screen overflow-hidden bg-dark-300">
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

      <section className="relative z-10 flex flex-1 flex-col justify-between px-6 py-10 md:px-16 lg:max-w-[50%]">
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

          <div className="max-w-[496px] w-full">
            <PatientForm />
          </div>
        </div>


      </section>

      {/* Hero Image Side */}
      <div className="hidden lg:block relative flex-1 h-full">
        <Image
          src="/assets/images/modern-clinic.png"
          fill
          alt="Healthcare background"
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-300/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300/40 via-transparent to-transparent" />
      </div>
    </div>
  );
};
