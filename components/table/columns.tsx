"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";

import { AppointmentModal } from "../AppointmentModal";
import { StatusBadge } from "../StatusBadge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.name}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular min-w-[100px]">
          {formatDateTime(appointment.schedule).dateTime}
        </p>
      );
    },
  },
  {
    accessorKey: "primaryPhysician",
    header: "Doctor",
    cell: ({ row }) => {
      const appointment = row.original;

      // Smart parsing for long doctor strings (e.g., "Dr. Richard Daniel - Senior Cardiologist...")
      const rawName = appointment.primaryPhysician || 'Unknown';
      const [nameWithPrefix, ...parsedTitle] = rawName.split(" – ");
      const nameWithoutPrefix = nameWithPrefix.replace(/^Dr\. /, "").trim();

      const doctor = Doctors.find(
        (doc) => doc.name.toLowerCase() === nameWithoutPrefix.toLowerCase() || 
                 doc.name.toLowerCase() === nameWithPrefix.toLowerCase()
      );

      const displayTitle = parsedTitle.join(" – ") || (doctor ? doctor.specialty : "");
      const parsedName = nameWithPrefix;

      return (
        <div className="flex items-center gap-3 max-w-[200px]">
          <Image
            src={doctor?.image || "/assets/icons/user.svg"}
            alt="doctor"
            width={32}
            height={32}
            className="rounded-full border border-dark-500 bg-dark-400 shrink-0"
            style={{ height: 'auto' }}
          />
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col truncate cursor-pointer group">
                <p className="text-[14px] font-medium text-white truncate group-hover:text-green-500 transition-colors">
                  {doctor ? `Dr. ${doctor.name}` : (parsedName.startsWith("Dr. ") ? parsedName : `Dr. ${parsedName}`)}
                </p>
                {displayTitle && (
                  <p className="text-[11px] text-dark-600 font-normal italic truncate">
                    {displayTitle}
                  </p>
                )}
              </div>
            </DialogTrigger>
            <DialogContent className="shad-dialog sm:max-w-md">
              <DialogHeader className="mb-4 space-y-3">
                <DialogTitle>Doctor Information</DialogTitle>
                <DialogDescription>
                  Full professional details for the selected physician.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center gap-6 py-6">
                <div className="relative">
                  <Image
                    src={doctor?.image || "/assets/icons/user.svg"}
                    alt="doctor"
                    width={120}
                    height={120}
                    className="rounded-full border-2 border-green-500 bg-dark-400 p-1 shadow-lg shadow-green-500/10"
                    style={{ height: 'auto' }}
                  />
                  <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-green-500 flex items-center justify-center border-2 border-dark-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="size-3.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center space-y-4 w-full">
                  <div className="space-y-1">
                    <h3 className="text-[24px] font-bold text-white tracking-tight">
                      {doctor ? `Dr. ${doctor.name}` : (parsedName.startsWith("Dr. ") ? parsedName : `Dr. ${parsedName}`)}
                    </h3>
                    <p className="text-green-500 text-[15px] font-medium uppercase tracking-wide">
                      {displayTitle.split(",")[0]}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3 p-4 rounded-2xl bg-dark-500 border border-dark-600/50 text-left">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold text-dark-700 uppercase tracking-wider">Qualifications & Credentials</span>
                      <p className="text-[14px] text-white leading-relaxed">
                        {displayTitle || "Professional Healthcare Provider"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className="flex gap-1">
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="schedule"
            title="Schedule Appointment"
            description="Please confirm the following details to schedule."
          />
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="cancel"
            title="Cancel Appointment"
            description="Are you sure you want to cancel your appointment?"
          />
        </div>
      );
    },
  },
];