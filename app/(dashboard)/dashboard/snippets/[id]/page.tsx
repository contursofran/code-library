import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import Content from "@/app/(dashboard)/dashboard/components/Content"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

interface SnippetsPageProps {
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

export default async function SnippetsPage({ params }: SnippetsPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages?.signIn || "/login")
  }

  const snippet = await getUserSnippet(params.id, user.id)

  if (snippet) {
    return <Content snippet={snippet} />
  }
}
