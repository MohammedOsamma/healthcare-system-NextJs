"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatDateTime } from "@/lib/utils";
import StatusBadge from "../StatusBadge";
import { Appointment } from "@/types/appwrite.types";
import { Doctors } from "@/constents";
import Image from "next/image";
import AppointmentModal from "../AppointmentModal";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => {
      return <p className="text-14-medium">{row.original.patient.name}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={row.original.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => {
      {
        return (
          <p className="text-14-regular min-w-[100px]">
            {formatDateTime(row.original.schedule).dateTime}
          </p>
        );
      }
    },
  },
  {
    accessorKey: "primaryPhysician",
    header: () => "Doctor",
    cell: ({ row }) => {
      const doctor = Doctors.find(
        (doc) => doc.name === row.original.primaryPhysician
      );

      return (
        <div className="flex items-center gap-3">
          <Image
            src={doctor?.image}
            alt={doctor?.name}
            width={100}
            height={100}
            className="size-8"
          />
          <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-1 ">
          <AppointmentModal type={"schedule"} />
          <AppointmentModal type={"cancel"} />
        </div>
      );
    },
  },
];
