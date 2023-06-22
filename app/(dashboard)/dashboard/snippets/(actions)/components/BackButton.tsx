import Link from "next/link"
import { ChevronLeft } from "tabler-icons-react"

export default function BackButton() {
  return (
    <Link
      className="flex items-center gap-1 text-gray-400 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
      href={"/dashboard/snippets"}
    >
      <ChevronLeft className="h-4 w-4" />
      <div className="text-sm font-medium">Back</div>
    </Link>
  )
}
