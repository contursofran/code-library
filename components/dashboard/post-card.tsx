import { formatDate } from "@/lib/utils"
import Link from "next/link"

interface PostCardProps {
  title: string
  description: string
  date: string
  href: string
}

export default function PostCard({
  title,
  description,
  date,
  href,
}: PostCardProps) {
  return (
    <Link href={href}>
      <div className="flex h-28 w-96 rounded-md border p-4 hover:border-primary/80">
        <div className="flex grow flex-col space-y-1">
          <div className="text-lg leading-none tracking-tight">{title}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
          <div className="flex grow items-end justify-end">
            <div className="text-xs">{formatDate(date)}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
