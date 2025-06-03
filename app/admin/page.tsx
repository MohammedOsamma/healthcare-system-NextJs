import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/icons/logo-full.svg";
import StatCard from "@/components/StatCard";
import AppointmentIcon from "@/public/assets/icons/appointments.svg";
import PendingIcon from "@/public/assets/icons/pending.svg";
import CancelIcon from "@/public/assets/icons/cancelled.svg";
const Admin = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="" className="cursor-pointer">
          <Image
            src={Logo}
            alt="logo"
            width={32}
            height={32}
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋 </h1>
          <p className="text-[#ABB8C4]">
            Start day with manageing new Appointment
          </p>
        </section>
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={5}
            label="Schedule appointments"
            icon={AppointmentIcon}
          />
          <StatCard
            type="pending"
            count={10}
            label="Pending Appointments"
            icon={PendingIcon}
          />
          <StatCard
            type="cancelled"
            count={2}
            label="Cancelled Appointments"
            icon={CancelIcon}
          />
        </section>
      </main>
    </div>
  );
};

export default Admin;
