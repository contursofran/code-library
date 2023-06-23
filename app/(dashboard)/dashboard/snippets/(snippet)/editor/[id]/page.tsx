import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import SnippetForm from "@/app/(dashboard)/dashboard/snippets/components/SnippetForm"

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

  return (
    <div className="flex-col items-center justify-center">
      <div className="w-full flex-col justify-center">
        {snippet && <SnippetForm action="edit" snippet={snippet} />}
      </div>
    </div>
  )
}
