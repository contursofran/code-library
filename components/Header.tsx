"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function PageHeader() {
  const pageName = usePathname()

  return (
    <>
      {pageName === "/dashboard/snippets" && <SnippetsPageHeader />}
      {pageName === "/dashboard/bugs" && <BugsPageHeader />}
    </>
  )
}

function SnippetsPageHeader() {
  return (
    <div className="container flex w-full items-center justify-between pt-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">Snippets</h1>
          <div className="pt-1 text-gray-600 dark:text-gray-400">
            A place where you can store your code snippets
          </div>
        </div>
      </div>
      <Link href={"/dashboard/snippets/editor"}>
        <Button size="sm">New Snippet</Button>
      </Link>
    </div>
  )
}

function BugsPageHeader() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 py-8">
          <h1 className="text-2xl font-medium">Bugs</h1>
          <div className="pt-1 text-gray-600 dark:text-gray-400">
            A place where you can store bugs and errors.
          </div>
        </div>
      </div>
    </div>
  )
}
