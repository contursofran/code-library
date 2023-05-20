import { Copy } from "tabler-icons-react"

import { formatDate } from "@/lib/utils"

import { Snippet } from "../types"
import { Button } from "./ui/button"

export default function SnippetCard({ snippet }: { snippet: Snippet }) {
  return (
    <div className="flex h-20 w-full items-center justify-between p-5 hover:dark:bg-[#15121c]">
      <div className="flex w-1/3 flex-col space-y-1">
        <div className="text-lg font-medium leading-none tracking-tight">
          {snippet.content.title}
        </div>
        <div className="text-sm text-gray-500">
          {snippet.content.description}
        </div>
      </div>
      <div className="flex w-1/4">
        {snippet.tags.map((tag) => (
          <div
            className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-500"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="w-1/4 text-sm text-gray-500">
        {formatDate(snippet.date)}
      </div>
      <Button size="md" variant="outline">
        <Copy className="h-5" />
      </Button>
    </div>
  )
}
