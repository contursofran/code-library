"use client"

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
import { Icons } from "@/components/icons"
import { NotificationsItem } from "@/components/notifications-item"

export function NotificationsMenu() {
  const notificationsState = useStore(useNotificationsStore, (state) => state)
  const notificationsCount = notificationsState?.notifications?.length || 0
  const sortedNotifications = notificationsState?.notifications?.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            notificationsCount > 0 ? "w-12" : "w-8",
            "h-8 rounded-full px-0"
          )}
          size="sm"
          variant="outline"
        >
          <div className="flex gap-1">
            <Icons.bell className="h-4 w-4" />
            {notificationsCount > 0 && (
              <div className="flex h-4 w-5 items-center justify-center rounded-full bg-black p-1 text-xs text-white dark:bg-white dark:text-black">
                {notificationsCount}
              </div>
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 w-[350px] pb-2">
        <DropdownMenuLabel className="flex w-full items-center justify-between">
          <div className="text-base">Notifications</div>
          {notificationsCount > 0 && (
            <button
              className="text-xs font-medium text-muted-foreground hover:underline"
              onClick={() => notificationsState?.clearNotifications()}
            >
              Mark all as read
            </button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="shadow-sm" />
        {notificationsCount === 0 ? (
          <div className="flex h-[300px] justify-center p-2 text-center text-sm text-gray-500">
            <p className="flex items-center justify-center">
              You have no new notifications
            </p>
          </div>
        ) : (
          <ScrollArea className="-mx-1 h-[300px]" scrollBarClassName="mx-1">
            {sortedNotifications?.map((notification) => (
              <div key={notification.id}>
                <DropdownMenuItem className="focus:bg-transparent">
                  {notification != null && (
                    <NotificationsItem
                      {...notification}
                      key={notification.id}
                    />
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </div>
            ))}
          </ScrollArea>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
