import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex">
      <div className="mx-auto mt-8 h-[calc(100vh-64px-64px-64px)] max-w-[750px] grow justify-center">
        <div className="flex h-full w-full justify-center ">
          <Skeleton className="my-2 h-full w-full" />
        </div>
      </div>
      <div className="-mt-4 flex h-16 w-24 shrink-0 items-center justify-end">
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  )
}
