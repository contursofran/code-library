import SnippetCard from "@/components/SnippetCard"

const snippets = [
  {
    code: "console.log('hello world')",
    date: "2023-03-03",
    description: "Print hello world",
    id: "1",
    language: "javascript",
    tags: ["tag1", "tag2"],
    title: "Hello world",
  },
  {
    code: "some code",
    date: "2023-03-03",
    description: "Make nav bar sticky",
    id: "2",
    language: "typescript",
    tags: ["tag1", "tag2"],
    title: "Nav bar sticky",
  },
  {
    code: "some code",
    date: "2023-03-03",
    description: "Make nav bar sticky",
    id: "3",
    language: "typescript",
    tags: ["tag1", "tag2"],
    title: "Nav bar sticky",
  },
]

export default function SnippetsPage({}) {
  return (
    <div className="mt-8 flex flex-col divide-y divide-border rounded-md border dark:divide-slate-700 dark:border-slate-700">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.id} snippet={snippet} />
      ))}
    </div>
  )
}
