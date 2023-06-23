import { Code } from "tabler-icons-react"

import { Skeleton } from "@/components/ui/skeleton"
import CopyButton from "@/app/(dashboard)/dashboard/snippets/components/CopyButton"
import Editor from "@/app/(dashboard)/dashboard/snippets/components/Editor"

export default function Loading() {
  return (
    <div className="container mt-8 flex h-[calc(100vh-64px-64px-69px-16px-32px-64px)] w-full justify-between">
      <div className="flex w-full items-start">
        <Skeleton className="h-6 w-[85px]" />
        <div className="mx-48 mt-12 flex h-full w-full flex-col gap-1">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
      <Skeleton className="h-9 w-[114px]" />
    </div>
  )
}
