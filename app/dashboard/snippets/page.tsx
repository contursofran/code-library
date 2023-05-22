import { Snippet } from "@/types/index"
import { DataTable } from "@/components/SnippetsTable"
import { columns } from "@/components/SnippetsTableColumns"

const snippets: Snippet[] = [
  {
    content: {
      code: "console.log('hello world')",
      description: "Print hello world",
      title: "Test",
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
      language: "typescript",
    },
    date: "2023-03-03",
    id: "2",
    tags: ["tag1", "tag2"],
  },
]

export default function SnippetsPage({}) {
  return <DataTable columns={columns} data={snippets} />
}
