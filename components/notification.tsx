import { Check, X } from "tabler-icons-react"

export function Notification() {
  return (
    <div className="flex h-12 w-full border-b">
      <div className="flex items-center gap-1">
        <Check className="mr-2 h-5 w-5 rounded-full p-1 dark:bg-white dark:text-background " />{" "}
        <div className="h-full">{"Test"}</div>
      </div>
    </div>
  )
}
