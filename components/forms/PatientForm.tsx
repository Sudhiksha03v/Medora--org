// components/forms/PatientForm.tsx

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css"; // Ensure this is imported
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

import PhoneInput from "react-phone-number-input";

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "+91", // Default phone value with Indian country code
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    console.log("Submitting form with values:", values);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);
      console.log("Create user response:", newUser);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/new-appointment`);
      } else {
        console.error("Failed to create user - no response returned.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Log validation errors if any
  if (Object.keys(form.formState.errors).length > 0) {
    console.log("Validation errors:", form.formState.errors);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-8 space-y-2">
          <h1 className="font-display text-[32px] font-bold text-white">Hey there 👋</h1>
          <p className="text-[14px] text-dark-700">
            Get started by creating your account to book your first appointment.
          </p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Enter your full name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="Example: youremail@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="Enter phone number"
        >
          <PhoneInput
            international
            defaultCountry="IN" // Ensure the country code is set to India
            value={form.watch("phone") ?? ""} // Ensure value is set properly
            onChange={(value) => form.setValue("phone", value ?? "")} // Set the value
            className="input-class"
            placeholder="Enter phone number"
          />
        </CustomFormField>

        <SubmitButton isLoading={isLoading}>Yes, I confirm to proceed to the next step</SubmitButton>
      </form>
    </Form>
  );
};
