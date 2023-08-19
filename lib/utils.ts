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

export function randomId() {
  return Math.random().toString(16).slice(2)
}

export const copyToClipboard = (
  code: string,
  event?: React.MouseEvent<HTMLButtonElement>
) => {
  event && event.stopPropagation()
  navigator.clipboard.writeText(code)
}
