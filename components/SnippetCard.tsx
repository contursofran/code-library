import { Copy } from "tabler-icons-react"

import { formatDate } from "@/lib/utils"

import { Button } from "./ui/button"

interface Snippet {
  code: string
  date: string
  description: string
  id: string
  language: string
  tags: string[]
  title: string
}

export default function SnippetCard({ snippet }: { snippet: Snippet }) {
  const { date, description, tags, title } = snippet

  return (
    <div className="flex h-40 w-80 flex-col justify-between rounded-lg border p-5">
      <div className="flex justify-between ">
        <div className="flex flex-col space-y-1">
          <div className="text-lg font-medium leading-none tracking-tight">
            {title}
          </div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
        <Button size="sm" variant="outline">
          <Copy className="h-[17px]" />
        </Button>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex">
          {tags.map((tag) => (
            <div
              className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-500"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-400">{formatDate(date)}</div>
      </div>
    </div>
  )
}
