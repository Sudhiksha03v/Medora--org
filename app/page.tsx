'use client';
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = () => {
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {isAdmin && <PasskeyModal />}

      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <Image
          src="/assets/images/onboarding-img.jpg"
          height={1000}
          width={1000}
          alt="onboarding"
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105 hover:blur-sm"
        />
        {/* Subtle Image Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 transition-all duration-500 hover:opacity-50"></div>
      </div>

      {/* Right Section: Content & Form */}
      <section className="flex flex-col justify-start items-center w-full md:w-1/2 px-8 py-16 space-y-8">
        <div className="text-center space-y-4 w-full">
          <div className="w-full flex justify-center">
            <Image
              src="/assets/icons/logo-full.png"
              height={64}  // Set a fixed height for the logo
              width={256}  // Set a fixed width for the logo
              alt="logo"
              className="mx-auto"
            />
          </div>
          <p className="text-lg text-gray-300">
            Your trusted healthcare platform for all your medical needs.
          </p>
        </div>

        {/* Patient Registration Form */}
        <div className="w-full max-w-lg bg-gray-800 p-10 rounded-lg shadow-2xl mt-10 transition-all duration-300">
          <PatientForm />
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center text-sm text-gray-400 mt-8 w-full max-w-md">
          <p>Medora | All Rights Reserved ©</p>
          <Link
            href="/?admin=true"
            className="bg-green-500 text-white py-2 px-6 rounded-md text-center font-semibold shadow-md transform hover:scale-105 transition duration-300 hover:shadow-lg"
          >
            Admin Login
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
