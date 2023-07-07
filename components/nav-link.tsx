"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"

import { cn } from "@/lib/utils"

interface NavLinkProps extends NavItem {
  className?: string
}

export function NavLink({ href, title, className }: NavLinkProps) {
  const isCurrentPage = usePathname()?.includes(href)

  const baseLinkStyles = "flex items-center text-lg font-medium transition-all"
  const activeLinkStyles = "font-semibold"
  const inactiveLinkStyles = "text-muted-foreground"
  const hoverLinkStyles = "hover:text-foreground/80"

  const linkStyle = cn(
    className,
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
