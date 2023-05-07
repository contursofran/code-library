"use client"

import { usePathname } from "next/navigation"

import { upperFirst } from "@/lib/utils"

export default function PageHeader() {
  const pageName = usePathname()?.split("/")?.[2]

  return (
    <div className="z-10 w-full shadow-sm">
      <div className="flex px-20 py-6">
        <h1 className="text-2xl font-medium">{upperFirst(pageName)}</h1>
      </div>
    </div>
  )
}
