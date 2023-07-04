"use client"

import Link from "next/link"
import { NavItem } from "@/types"
import { Music } from "tabler-icons-react"

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
import NavLink from "@/components/nav-link"
import ThemeToggle from "@/components/theme-toggle"

interface MainNavProps {
  isLandingPage?: boolean
  items?: NavItem[]
}

export default function MainNav({ isLandingPage, items }: MainNavProps) {
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
          <DropdownMenuLabel>
            <Link className="flex items-center" href="/">
              <Music className="mr-2 h-4 w-4" /> {siteConfig.name}
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem asChild key={index}>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex-1 gap-2 text-right">
        <div className="flex items-center justify-end">
          {isLandingPage ? <ThemeToggle /> : <ThemeToggle />}
        </div>
      </div>
    </div>
  )
}
