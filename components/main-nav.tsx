"use client"

import Link from "next/link"
import { NavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { NavLink } from "@/components/nav-link"
import { NotificationsMenu } from "@/components/notifications-menu"
import { ThemeToggle } from "@/components/theme-toggle"

interface MainNavProps {
  isLandingPage?: boolean
  items?: NavItem[]
}

export function MainNav({ isLandingPage, items }: MainNavProps) {
  return (
    <div className="flex h-16 w-full items-center gap-6 py-4 md:gap-10">
      {isLandingPage && (
        <div className="hidden flex-1 items-center space-x-2 text-left md:flex">
          <span className="hidden font-bold dark:text-white sm:inline-block">
            {siteConfig.name}
          </span>
        </div>
      )}
      {items?.length ? (
        <nav
          className={cn(
            isLandingPage
              ? "mx-auto hidden gap-6 md:flex"
              : "hidden gap-6 md:flex"
          )}
        >
          {items?.map(
            (item, index) =>
              item.href && (
                <NavLink href={item.href} key={index} title={item.title} />
              )
          )}
        </nav>
      ) : null}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="-ml-4 text-base hover:bg-transparent md:hidden"
            variant="ghost"
          >
            <span className="font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[300px] overflow-scroll"
          sideOffset={24}
        >
          <DropdownMenuLabel>{siteConfig.name}</DropdownMenuLabel>
          {items?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem asChild key={index}>
                  <Link
                    className="cursor-pointer underline-offset-4 focus:bg-transparent focus:underline"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex-1 gap-3 text-right">
        <div className="flex items-center justify-end gap-2">
          {!isLandingPage && (
            <Link href="/home">
              <Button
                className="h-8 w-8 rounded-full px-0"
                size="icon"
                variant="outline"
              >
                <Icons.home className="h-4 w-4" />
              </Button>
            </Link>
          )}
          <ThemeToggle />
          {!isLandingPage && <NotificationsMenu />}
        </div>
      </div>
    </div>
  )
}
