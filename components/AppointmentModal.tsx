import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Appointment } from "@/types/appwrite.types";
import AppointmentForm from "./forms/AppointmentForm";

const AppointmentModal = ({
  type,
  userId,
  patientId,
  appointment,
}: {
  type: "schedule" | "cancel";
  userId: string;
  patientId: string;
  appointment?: Appointment;
}) => {
  const [Open, setOpen] = useState(false);
  return (
    <Dialog open={Open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className={`capitalize cursor-pointer ${
            type === "schedule" && "text-green-500"
          }`}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm-max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
          <DialogDescription>
            Please Fill in the Following Details To {type} an Appointment
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm
          userId={userId}
          patientId={patientId}
          type={type}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
