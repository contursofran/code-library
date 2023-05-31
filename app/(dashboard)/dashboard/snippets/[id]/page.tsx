import { snippets } from "@/data/data"

import Content from "@/app/(dashboard)/dashboard/components/Content"

interface SnippetsPageProps {
  params: {
    id: string
  }
}

async function getUserSnippet(id: string) {
  const snippet = snippets.find((snippet) => snippet.id === id)

  return snippet
}

export default async function SnippetsPage({ params }: SnippetsPageProps) {
  const snippet = await getUserSnippet(params.id)

  if (snippet) {
    return <Content snippet={snippet} />
  }
}
