import { Check, X } from "tabler-icons-react"

import { formatDate } from "@/lib/utils"
import { Notification } from "@/lib/validations/notifications"

export function NotificationsItem({ date, message, type }: Notification) {
  return (
    <div className="flex h-12 w-full">
      <div className="flex items-center gap-1">
        <Check className="mx-4 h-6 w-6 rounded-full p-1 dark:bg-white dark:text-background " />{" "}
        <div className="flex h-full flex-col items-center">
          {message}
          {formatDate(date)}
        </div>
      </div>
    </div>
  )
}
