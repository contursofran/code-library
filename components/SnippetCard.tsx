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
    <div className="flex h-20 w-full items-center justify-between p-5 hover:dark:bg-[#15121c]">
      <div className="flex w-1/3 flex-col space-y-1">
        <div className="text-lg font-medium leading-none tracking-tight">
          {title}
        </div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="flex w-1/4">
        {tags.map((tag) => (
          <div
            className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-500"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="w-1/4 text-sm text-gray-500">{formatDate(date)}</div>
      <Button size="md" variant="outline">
        <Copy className="h-5" />
      </Button>
    </div>
  )
}
