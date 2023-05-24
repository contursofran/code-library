"use client"

import { usePathname } from "next/navigation"

import { upperFirst } from "@/lib/utils"
import CreateSnippetButton from "@/components/CreateSnippetButton"

export default function PageHeader() {
  const pageName = usePathname()

  return (
    <>
      {pageName === "/dashboard/snippets" && <SnippetsPage />}
      {pageName?.match(/^\/dashboard\/snippets\/(?<id>\d+)$/) && (
        <SnippetsIdPage pageName={pageName} />
      )}
    </>
  )
}

function SnippetsPage() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 py-8">
          <h1 className="text-2xl font-medium">Snippets</h1>
          <div className="pt-1 text-gray-600 dark:text-gray-400">
            A place where you can store your code snippets
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <CreateSnippetButton />
      </div>
    </div>
  )
}

function SnippetsIdPage({ pageName }: { pageName: string | undefined }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 py-8">
          <h1 className="text-2xl font-medium">
            {upperFirst(pageName?.split("/")[3])}
          </h1>
        </div>
      </div>
    </div>
  )
}
