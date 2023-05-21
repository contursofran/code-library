import { Snippet } from "@/types/index"
import { DataTable } from "@/components/SnippetsTable"

const snippets: Snippet[] = [
  {
    content: {
      code: "console.log('hello world')",
      description: "Print hello world",
      title: "Hello world",
      language: "javascript",
    },
    date: "2023-03-03",
    id: "1",
    tags: ["tag1", "tag2"],
  },
  {
    content: {
      code: "console.log('hello world')",
      description: "Print hello world",
      title: "Hello world",
      language: "javascript",
    },
    date: "2023-03-03",
    id: "2",
    tags: ["tag1", "tag2"],
  },
]

export default function SnippetsPage({}) {
  return (
    <div className="mt-8 flex flex-col divide-y divide-border rounded-md border dark:divide-slate-700 dark:border-slate-700">
      <DataTable data={snippets} />
    </div>
  )
}
