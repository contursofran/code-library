import Link from "next/link"
import { ChevronLeft } from "tabler-icons-react"

export default function BackButton() {
  return (
    <div className="flex w-24 shrink-0">
      <Link
        className="flex h-fit items-center justify-start gap-1 text-muted-foreground hover:text-foreground"
        href={"/dashboard/snippets"}
      >
        <ChevronLeft className="h-4 w-4" />
        <div className="text-sm font-medium">Back</div>
      </Link>
    </div>
  )
}
