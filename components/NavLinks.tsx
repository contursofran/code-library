"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface NavbarLinkProps {
  href: string
  icon?: React.ReactNode
  text: string
}

export function NavbarLink({ href, icon, text }: NavbarLinkProps) {
  const pathName = usePathname()
  const isActive = pathName === href

  return (
    <Link
      className={cn(
        isActive
          ? " font-semibold text-slate-700 dark:text-gray-200"
          : " text-gray-400 dark:text-gray-400",
        "flex items-center text-lg font-medium transition-all hover:text-slate-900 dark:hover:text-gray-200 sm:text-sm"
      )}
      href={href}
    >
      <div className="flex items-center gap-2 p-0">
        {icon && <div className="flex h-6 w-6 items-center">{icon}</div>}
        <div className="text-sm ">{text}</div>
      </div>
    </Link>
  )
}
