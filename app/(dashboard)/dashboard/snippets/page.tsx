import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import { DataTable } from "@/app/(dashboard)/dashboard/components/DataTable"
import { columns } from "@/app/(dashboard)/dashboard/components/DataTableColumns"

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
