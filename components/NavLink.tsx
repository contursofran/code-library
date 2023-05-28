"use client"

import { text } from "stream/consumers"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"

import { cn } from "@/lib/utils"

export default function NavLink({ href, isTab, title }: NavItem) {
  const isCurrentPage = usePathname()?.includes(href)

  const baseLinkStyles = "flex items-center text-lg font-medium transition-all"
  const activeLinkStyles = "font-semibold text-slate-700 dark:text-gray-200"
  const inactiveLinkStyles = "text-gray-400 dark:text-gray-400"
  const hoverLinkStyles = "hover:text-slate-900 dark:hover:text-gray-200"

  const tabStyles = cn(
    isCurrentPage
      ? "border-gray-800 text-gray-800 dark:border-gray-200 dark:text-gray-200"
      : "border-transparent text-gray-400 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
    "border-b-[3px] py-2 text-sm font-medium transition-all"
  )

  const linkStyle = cn(
    baseLinkStyles,
    isTab ? tabStyles : null,
    isCurrentPage ? activeLinkStyles : inactiveLinkStyles,
    hoverLinkStyles
  )

  return (
    <Link className={linkStyle} href={href}>
      <div className="text-sm">{title}</div>
    </Link>
  )
}
