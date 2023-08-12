import { Check, X } from "tabler-icons-react"

import { formatDate, upperFirst } from "@/lib/utils"
import { Notification } from "@/lib/validations/notifications"

export function NotificationsItem({
  date,
  message,
  type,
  snippet,
}: Notification) {
  const Icon = type === "success" ? Check : X

  return (
    <div className="flex h-14 w-full">
      <div className="flex w-full items-center gap-1 px-2">
        <Icon className="mx-4 h-6 w-6 shrink-0 rounded-full bg-primary p-1 text-background" />
        <div className="flex flex-col gap-1 px-2 text-sm">
          {formatMessage({ message, snippet })}
          <div className="flex text-xs font-medium text-muted-foreground">
            {formatDate(date)}
          </div>
        </div>
      </div>
    </div>
  )
}

const formatMessage = ({
  snippet,
  message,
}: Pick<Notification, "message" | "snippet">) => {
  const maxSnippetLength = 15

  return (
    <p>
      <span className="font-semibold">
        {snippet && snippet?.length > maxSnippetLength
          ? upperFirst(snippet).slice(0, maxSnippetLength) + "..."
          : upperFirst(snippet)}
      </span>{" "}
      {message}
    </p>
  )
}
