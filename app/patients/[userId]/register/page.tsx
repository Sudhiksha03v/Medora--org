import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params }: SearchParamProps) => {
  const { userId } = await params;

  if (!userId) {
    throw new Error("userId is required");
  }

  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) {
    return redirect(`/patients/${userId}/new-appointment`);
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="register" 
            className="mb-12 h-16 w-fit"
          />

          {/* Form Section with translucent touch */}
          <div className="w-full bg-gray-800 p-8 rounded-xl shadow-lg mt-12 bg-opacity-70 backdrop-blur-lg">
            <RegisterForm user={user} />
          </div>

          <p className="copyright py-12"> Medora | All Rights Reserved© </p>
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
