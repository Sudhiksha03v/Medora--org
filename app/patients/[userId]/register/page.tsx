import Image from "next/image";
import { useRouter } from "next/router";
import * as Sentry from "@sentry/nextjs";
import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params }: SearchParamProps) => {
  const { userId } = await params;

  if (!userId) {
    throw new Error("userId is required");
  }

  const user = await getUser(userId);
  const patient = await getPatient(userId);

  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <section className="remove-scrollbar container flex items-center justify-center">
        <div className="sub-container max-w-[1100px] flex-1 flex-col py-10 px-8 space-y-8">
          {/* Logo */}
          <div className="w-full flex justify-start">
            <Image
              src="/assets/icons/logo-full.png"
              height={64}
              width={256}
              alt="logo"
              className="ml-4"
            />
          </div>

          {/* Form Section with translucent touch */}
          <div className="w-full bg-gray-800 p-8 rounded-xl shadow-lg mt-12 bg-opacity-70 backdrop-blur-lg">
            <RegisterForm user={user} />
          </div>

          {/* Footer Section */}
          <p className="text-center text-gray-300 text-sm mt-16">
            Medora | All Rights Reserved
          </p>
        </div>
      </section>

      {/* Fixed Image Section on the Right */}
      <div className="hidden md:block flex-shrink-0 w-1/2 max-w-sm">
        <Image
          src="/assets/images/register-img.jpg"
          height={1000}
          width={1000}
          alt="patient"
          className="w-full h-full object-cover rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Register;
