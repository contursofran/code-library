import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/header"
import { Shell } from "@/components/shell"

export default function Loading() {
  return (
    <Shell>
      <Header
        description="Here you can create and manage your snippets."
        title="Snippets"
      />
      <div className="container flex flex-1">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex h-20 items-center justify-between">
            <Skeleton className="block h-9 w-full" />
          </div>
          <Skeleton className="hidden flex-1 sm:flex" />
          <div className="flex flex-1 flex-col gap-6 sm:hidden">
            <Skeleton className="h-[146px] w-full" />
            <Skeleton className="h-[146px] w-full" />
            <Skeleton className="h-[146px] w-full" />
          </div>
        </div>
      </div>
    </Shell>
  )
}
