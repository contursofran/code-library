import { Bell } from "tabler-icons-react"

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
import { Notification } from "@/components/notification"

export function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-8 w-12 rounded-full px-0"
          size="sm"
          variant="outline"
        >
          <div className="flex gap-1">
            <Bell className="h-4 w-4" />
            <div className="flex h-4 w-5 items-center justify-center rounded-full bg-white p-1 text-xs text-black">
              4
            </div>
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
          <DropdownMenuItem className="focus:bg-transparent">
            <Notification />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-transparent">
            <Notification />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-transparent">
            <Notification />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-transparent">
            <Notification />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-transparent">
            <Notification />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
