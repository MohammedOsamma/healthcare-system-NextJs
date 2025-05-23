import Image from "next/image";
import Logo from "@/public/assets/icons/logo-full.svg";
import onBoarding from "@/public/assets/images/onboarding-img.png";
import PatientForm from "@/components/PatientForm";
import Link from "next/link";

export default function Home() {
  return (
    // Todo OTP Verfication
    <div className="flex h-screen min-h-screen   ">
      <section className="container  remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            height={1000}
            width={1000}
            src={Logo}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
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
        src={onBoarding}
        alt="patient"
        height={1000}
        width={1000}
        className="side-img max-w-[50%] rounded-l-2xl"
      />
    </div>
  );
}
