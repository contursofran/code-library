import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex">
      <div className="mx-auto max-w-[750px] grow justify-center">
        <div className="flex flex-col">
          <div className="flex h-10 items-center">
            <Skeleton className="my-2 h-9 w-72" />
          </div>
          <Skeleton className="my-2 h-16 w-full" />
          <div className="flex w-full justify-center ">
            <Skeleton className="h-[234px] w-full" />
          </div>
        </div>
      </div>
      <div className="-mt-8 flex h-16 w-24 shrink-0 items-center justify-end">
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  )
}
