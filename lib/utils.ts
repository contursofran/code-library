import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function upperFirst(str?: string) {
  if (!str) return ""
  return str[0].toUpperCase() + str.slice(1)
}

export function formatDate(date: string): string {
  const dateObj = new Date(date)
  const currentDate = new Date()

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year:
      currentDate.getFullYear() === dateObj.getFullYear()
        ? undefined
        : "numeric",
  }

  return Intl.DateTimeFormat("en-US", options).format(dateObj)
}
