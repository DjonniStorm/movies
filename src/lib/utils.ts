import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: Array<ClassValue>) => {
    return twMerge(clsx(classes));
};