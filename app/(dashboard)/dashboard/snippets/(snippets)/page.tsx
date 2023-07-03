import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import { DataTable } from "@/components/dashboard/DataTable"
import { columns } from "@/components/dashboard/DataTableColumns"
import Shell from "@/components/Shell"
import Header from "@/components/Header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

  return (
    <Shell>
      <Header
        description="Here you can create and manage your snippets."
        title="Snippets"
      >
        <Link href={"/dashboard/snippets/editor"}>
          <Button size="sm">New Snippet</Button>
        </Link>
      </Header>
      <DataTable columns={columns} data={data} />
    </Shell>
  )
}
