import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import { DataTable } from "@/components/dashboard/DataTable"
import { columns } from "@/components/dashboard/DataTableColumns"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

async function getSnippets() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages?.signIn || "login")
  }

  const snippets = await prisma.snippet.findMany({
    select: {
      id: true,
      title: true,
      code: true,
      description: true,
      date: true,
      language: true,
    },
    where: {
      authorId: user.id,
    },
  })

  return snippets
}

export default async function SnippetsPage({}) {
  const data = await getSnippets()

  return <DataTable columns={columns} data={data} />
}
