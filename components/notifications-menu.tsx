"use client"

import { Bell } from "tabler-icons-react"

import { useNotificationsStore } from "@/lib/store"
import { cn } from "@/lib/utils"
import useStore from "@/hooks/useStore"
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
  const notificationsState = useStore(useNotificationsStore, (state) => state)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            notificationsState?.notifications &&
              notificationsState?.notifications.length > 0
              ? "w-12"
              : "w-8",
            "h-8 rounded-full px-0"
          )}
          size="sm"
          variant="outline"
        >
          <div className="flex gap-1">
            <Bell className="h-4 w-4" />
            {notificationsState?.notifications &&
              notificationsState?.notifications?.length > 0 && (
                <div className="flex h-4 w-5 items-center justify-center rounded-full bg-black p-1 text-xs text-white dark:bg-white dark:text-black">
                  {notificationsState?.notifications?.length}
                </div>
              )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 w-[350px] pb-2">
        <DropdownMenuLabel className="flex w-full items-center justify-between">
          <div className="text-base">Notifications</div>
          <button
            className="text-xs font-medium text-muted-foreground hover:underline"
            onClick={() => notificationsState?.clearNotifications()}
          >
            Mark all as read
          </button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="shadow-sm" />
        <ScrollArea className="-mx-1 h-[300px]" scrollBarClassName="mx-1">
          {notificationsState?.notifications?.map((notification, index) => (
            <div key={notification.id}>
              <DropdownMenuItem className="focus:bg-transparent">
                <NotificationsItem {...notification} key={notification.id} />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </div>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
