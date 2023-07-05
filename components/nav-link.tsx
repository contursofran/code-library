"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"

import { cn } from "@/lib/utils"

export function NavLink({ href, title }: NavItem) {
  const isCurrentPage = usePathname()?.includes(href)

  const baseLinkStyles = "flex items-center text-lg font-medium transition-all"
  const activeLinkStyles = "font-semibold"
  const inactiveLinkStyles = "text-muted-foreground"
  const hoverLinkStyles = "hover:text-foreground/80"

  const linkStyle = cn(
    baseLinkStyles,
    isCurrentPage ? activeLinkStyles : inactiveLinkStyles,
    hoverLinkStyles
  )

  return (
    <Link className={linkStyle} href={href}>
      <div className="text-sm">{title}</div>
    </Link>
  )
}
