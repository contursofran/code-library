import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-1 justify-center md:mr-24">
      <div className="mt-10 flex max-w-[750px] flex-1 justify-center md:mt-[72px]">
        <Skeleton className="flex flex-1" />
      </div>
    </div>
  )
}
