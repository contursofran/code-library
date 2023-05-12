"use client"

import { usePathname } from "next/navigation"

import { upperFirst } from "@/lib/utils"

import SearchBar from "./SearchBar"

export default function PageHeader() {
  const pageName = usePathname()?.split("/")?.[2]
  return (
    <div className="z-10 w-full">
      <div className="flex flex-col gap-1 py-6">
        <h1 className="text-2xl font-medium">{upperFirst(pageName)}</h1>
        <div className="text-gray-600 dark:text-gray-400">
          {pageName === "snippets" &&
            "A place where you can store your code snippets"}
        </div>
        <SearchBar />
      </div>
    </div>
  )
}
