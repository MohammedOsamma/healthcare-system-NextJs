"use server";
import { ID } from "node-appwrite";
import {
  databases,
  NEXT_PUBLIC_APPOINTMENTS_COLLECTION_ID,
  NEXT_PUBLIC_DATABASE_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    
    const newAppointment = await databases.createDocument(
      NEXT_PUBLIC_DATABASE_ID!,
      NEXT_PUBLIC_APPOINTMENTS_COLLECTION_ID!,
      ID.unique(),
      appointment
    );
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
  }
};
