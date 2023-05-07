import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function upperFirst(str?: string) {
  if (!str) return ""
  return str[0].toUpperCase() + str.slice(1)
}
