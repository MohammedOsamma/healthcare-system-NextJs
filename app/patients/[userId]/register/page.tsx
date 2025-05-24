import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/icons/logo-full.svg";
import RegisterImage from "@/public/assets/images/register-img.png";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen min-h-screen   ">
      <section className="container  remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            height={1000}
            width={1000}
            src={Logo}
            alt="carePulse"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-[#76828D] xl:text-left">
              ©2025 CarePulse
            </p>
            <Link className="text-green-500" href="/?admin=true">
              Amdin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src={RegisterImage}
        alt="patient"
        height={1000}
        width={1000}
        className="side-img max-w-[390px] rounded-l-2xl"
      />
    </div>
  );
};

export default Register;
