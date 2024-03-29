import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import { SnippetForm } from "@/components/forms/snippet-form"

interface SnippetEditorPageProps {
  params: {
    id: string
  }
}

async function getUserSnippet(snippetId: string, userId: string) {
  const snippet = await prisma.snippet.findFirst({
    where: {
      id: snippetId,
      authorId: userId,
    },
  })

  return snippet
}

export default async function NewSnippetPage({
  params,
}: SnippetEditorPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages?.signIn || "/login")
  }

  const snippet = await getUserSnippet(params.id, user.id)

  return <>{snippet && <SnippetForm action="edit" snippet={snippet} />}</>
}
