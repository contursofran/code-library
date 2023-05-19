"use client"

import { usePathname } from "next/navigation"

import { upperFirst } from "@/lib/utils"

import CreateSnippetButton from "./CreateSnippetButton"
import SortFilter from "./SortFilter"
import TagFilter from "./TagFilter"

export default function PageHeader() {
  const pageName = usePathname()?.split("/")?.[2]

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 py-8">
          <h1 className="text-2xl font-medium">{upperFirst(pageName)}</h1>
          <div className="pt-1 text-gray-600 dark:text-gray-400">
            {pageName === "snippets" &&
              "A place where you can store your code snippets"}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <TagFilter />
          <SortFilter />
        </div>
        <CreateSnippetButton />
      </div>
    </div>
  )
}
