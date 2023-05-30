"use client"

import { usePathname } from "next/navigation"

import CreateSnippetButton from "@/components/CreateSnippetButton"

export default function PageHeader() {
  const pageName = usePathname()

  return (
    <>
      {pageName === "/dashboard/snippets" && <SnippetsPage />}
      {pageName === "/dashboard/bugs" && <BugsPage />}
    </>
  )
}

function SnippetsPage() {
  return (
    <div className="container flex w-full items-center justify-between pt-8 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">Snippets</h1>
          <div className="pt-1 text-gray-600 dark:text-gray-400">
            A place where you can store your code snippets
          </div>
        </div>
      </div>
      <CreateSnippetButton />
    </div>
  )
}

function BugsPage() {
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
      <div className="flex items-center justify-end">
        <CreateSnippetButton />
      </div>
    </div>
  )
}
