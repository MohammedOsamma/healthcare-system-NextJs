import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/icons/logo-full.svg";
import Calendar from "@/public/assets/icons/calendar.svg";
import SuccessImg from "@/public/assets/gifs/success.gif";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { Doctors } from "@/constents";
import { formatDateTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Success = async ({ params, searchParams }: SearchParamProps) => {
  const { userId } = await params;
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);
  const doctor = Doctors.find(
    (doc) => doc.name === appointment?.primaryPhysician
  );

  return (
    <div className="flex h-screen mx-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            height={1000}
            width={1000}
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image src={SuccessImg} alt="success" height={300} width={280} />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">Appointment Request</span> Has
            Been Successfully Submitted.
          </h2>
          <p>We Will Be in touch shortly to confirm</p>
        </section>
        <section className="request-details ">
          <p>Requested appointment details :</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr.{doctor?.name}</p>
          </div>
          <div className="flex gap-2 ">
            <Image src={Calendar} alt="calendar" width={24} height={24} />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn " asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        <p className="copyright mt-10 py-12 ">©2025 CarePulse</p>
      </div>
    </div>
  );
};

export default Success;
