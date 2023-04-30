import Link from "next/link"
import { Button } from "@/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Music, Search } from "tabler-icons-react"

import { siteConfig } from "@/config/site"
import NavbarLink from "./NavLinks"
import { ThemeToggle } from "./ThemeToggle"

interface MainNavProps {
  href: string
  title: string
}

export function MainNav({
  items,
  searchBar,
}: {
  items: MainNavProps[]
  searchBar?: boolean
}) {
  return (
    <div className="flex w-full gap-6 md:gap-10">
      <div className="hidden flex-1 items-center space-x-2 text-left md:flex">
        <span className="hidden font-bold dark:text-white sm:inline-block">
          {siteConfig.name}
        </span>
      </div>
      {items?.length ? (
        <nav className="mx-auto hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <NavbarLink href={item.href} key={index} text={item.title} />
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
      <div className="flex-1 items-center gap-2 text-right ">
        {searchBar ? <Search className="h-4 w-4" /> : null}
        <ThemeToggle />
      </div>
    </div>
  )
}
