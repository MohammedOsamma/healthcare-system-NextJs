import Image from "next/image";
import Logo from "@/public/assets/icons/logo-full.svg";
import Appointment from "@/public/assets/images/appointment-img.png";
import AppointmentForm from "@/components/forms/AppointmentForm";

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen   ">
      <section className="container  remove-scrollbar my-auto">
        <div className="sub-container max-w-[860px]">
          <Image
            height={1000}
            width={1000}
            src={Logo}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm />

          <p className="justify-items-end text-[#76828D] xl:text-left">
            ©2025 CarePulse
          </p>
        </div>
      </section>
      <Image
        src={Appointment}
        alt="appointment"
        height={1000}
        width={1000}
        className="side-img max-w-[390px] rounded-l-2xl"
      />
    </div>
  );
}
