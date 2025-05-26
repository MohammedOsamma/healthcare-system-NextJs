"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFromValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FromTypeField } from "./PatientForm";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Doctors, GenderOptions, IdentificationTypes } from "@/constents";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import FileUploader from "../FileUploader";

const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFromValidation>>({
    resolver: zodResolver(UserFromValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFromValidation>) {
    setIsLoading(true);

    try {
      const userData = { name, email, phone };
      const newUser = await createUser(userData);
      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10 flex-1"
      >
        <section className="space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-[#ABB8C4]">Let us know more about you.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>

        <CustomFormField
          fieldType={FromTypeField.INPUT}
          control={form.control}
          name="name"
          label="Full name "
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FromTypeField.INPUT}
            control={form.control}
            name="email"
            label="Email "
            placeholder="johndee@exmaple.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
          <CustomFormField
            fieldType={FromTypeField.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone Number"
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FromTypeField.DATE_PICKER}
            control={form.control}
            name="birthDate"
            label="Date of Birth"
          />
          <CustomFormField
            fieldType={FromTypeField.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FromTypeField.INPUT}
            control={form.control}
            name="address"
            label="Address"
            placeholder="14th Street , New York"
          />
          <CustomFormField
            fieldType={FromTypeField.INPUT}
            control={form.control}
            name="occupation"
            label="Occupation"
            placeholder="Software Engineer"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FromTypeField.INPUT}
            control={form.control}
            name="emergancyContactName"
            label="Emergancy Contact Name"
            placeholder="John Dee"
          />
          <CustomFormField
            fieldType={FromTypeField.PHONE_INPUT}
            control={form.control}
            name="emergancyContactNumber"
            label="Emergancy Contact Number"
            placeholder="(123) 456-7890"
          />
        </div>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Medical Information</h2>
          </div>
        </section>

        <CustomFormField
          fieldType={FromTypeField.SELECT}
          control={form.control}
          name="primaryPhysician"
          label="Primary Physician"
          placeholder="Select a physician"
        >
          {Doctors.map((doctor) => (
            <SelectItem key={doctor.name} value={doctor.name}>
              <div className="flex cursor-pointer items-center gap-2">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  height={32}
                  width={32}
                  className="rounded-full border border-[#363A3D]"
                />
                <p>{doctor.name}</p>
              </div>
            </SelectItem>
          ))}
        </CustomFormField>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FromTypeField.INPUT}
            control={form.control}
            name="insuranceProvider"
            label="Insurance Provider"
            placeholder="Health Insurance Co."
          />
          <CustomFormField
            fieldType={FromTypeField.INPUT}
            control={form.control}
            name="insurancePolicyNumber"
            label="Insurance Policy Number"
            placeholder="A13546877"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FromTypeField.TEXTAREA}
            control={form.control}
            name="allergies"
            label="Allergies"
            placeholder="Peaunts , Penicillin , etc."
          />
          <CustomFormField
            fieldType={FromTypeField.TEXTAREA}
            control={form.control}
            name="currentMedication"
            label="Current Medication"
            placeholder="Aspirin , Ibuprofen , etc."
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FromTypeField.TEXTAREA}
            control={form.control}
            name="familyMedicalHistory"
            label="Family Medical History"
            placeholder="Father had diabetes, mother had hypertension, etc."
          />
          <CustomFormField
            fieldType={FromTypeField.TEXTAREA}
            control={form.control}
            name="pastMedicalHistory"
            label="Past Medical History"
            placeholder="Had surgery in 2015, diagnosed with asthma in 2018, etc."
          />
        </div>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Idetification and Verfication</h2>
          </div>
        </section>

        <CustomFormField
          fieldType={FromTypeField.SELECT}
          control={form.control}
          name="identificaitonType"
          label="Identification Type"
          placeholder="Select an identification type"
        >
          {IdentificationTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </CustomFormField>

        <CustomFormField
          fieldType={FromTypeField.INPUT}
          control={form.control}
          name="identificationNumber"
          label="Identification Number"
          placeholder="13546877"
        />

        <CustomFormField
          fieldType={FromTypeField.SKELETON}
          control={form.control}
          name="identificationDocument"
          label="Scanned copy of Identification Document"
          renderSkeleton={(field) => (
            <FileUploader files={field.value} onChange={field.onChange} />
          )}
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};
export default RegisterForm;
