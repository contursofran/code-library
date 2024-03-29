import * as React from "react"

import { cn } from "@/lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Shell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className={cn("flex flex-1 flex-col gap-4", className)} {...props}>
      {children}
    </div>
  )
}
