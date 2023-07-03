import * as React from "react"

import { cn } from "@/lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Shell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  )
}
