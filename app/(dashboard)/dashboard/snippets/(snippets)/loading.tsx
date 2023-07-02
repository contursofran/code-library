import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    // h-[calc(100vh-64px-95.95px-64px-69px-16px)]
    <div className="container h-[calc(100vh-64px-96px-80px)]">
      <div className="flex h-full flex-col gap-4">
        <div className="flex h-20 shrink-0 items-center justify-between">
          <Skeleton className="h-9 w-[343px]" />
          <Skeleton className="h-9 w-[252px]" />
        </div>
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  )
}
