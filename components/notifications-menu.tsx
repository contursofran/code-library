"use client"

import { useEffect, useState } from "react"
import { Bell } from "tabler-icons-react"

import { getNotifications } from "@/lib/notifications"
import { cn } from "@/lib/utils"
import { Notifications } from "@/lib/validations/notifications"
import { toast, useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NotificationsItem } from "@/components/notifications-item"

export function NotificationsMenu() {
  const [notifications, setNotifications] = useState<Notifications>([])
  const { toast } = useToast()

  useEffect(() => {
    console.log(toast)
  }, [toast])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            notifications.length > 0 ? "w-12" : "w-8",
            "h-8 rounded-full px-0"
          )}
          size="sm"
          variant="outline"
        >
          <div className="flex gap-1">
            <Bell className="h-4 w-4" />
            {notifications?.length > 0 && (
              <div className="flex h-4 w-5 items-center justify-center rounded-full bg-white p-1 text-xs text-black">
                {notifications?.length}
              </div>
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 w-[350px]">
        <DropdownMenuLabel className="flex w-full items-center justify-between">
          <div className="text-base">Notifications</div>
          <button className="text-xs font-medium text-muted-foreground hover:underline">
            Mark all as read
          </button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[300px]">
          {notifications?.map((notification) => (
            <>
              <DropdownMenuItem className="focus:bg-transparent">
                <NotificationsItem {...notification} key={notification.id} />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
