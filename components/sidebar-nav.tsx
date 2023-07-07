"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem, SidebarNavItem } from "@/types"

import { cn } from "@/lib/utils"
import { NavLink } from "@/components/nav-link"

interface SidebarNavProps {
  items: SidebarNavItem[]
}

interface SidebarNavItemsProps {
  items: NavItem[]
  pathname: string | null
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div className="pb-4" key={index}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length && (
            <SidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
}

function SidebarNavItems({ items, pathname }: SidebarNavItemsProps) {
  return (
    <div className="flex flex-col text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <NavLink
            className="ml-2"
            href={item.href}
            key={index}
            title={item.title}
          />
        ) : (
          <span
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
            key={index}
          >
            {item.title}
          </span>
        )
      )}
    </div>
  )
}
