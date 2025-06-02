import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);
export const parseStringify = (value: any) => {
  if (value === undefined) return null;
  return JSON.parse(JSON.stringify(value));
};
