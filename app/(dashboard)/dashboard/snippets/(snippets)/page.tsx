import Link from "next/link"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/dashboard/data-table"
import { columns } from "@/components/dashboard/data-table-columns"
import { Header } from "@/components/header"
import { Shell } from "@/components/shell"
import { serverClient } from "@/app/_trpc/server-client"

async function getSnippets() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages?.signIn || "login")
  }

  const snippets = await serverClient.getSnippets({ id: user.id })

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
        <Button className="shrink-0 text-xs sm:text-sm" size="sm">
          <Link href={"/dashboard/snippets/editor"}>New Snippet</Link>
        </Button>
      </Header>
      <DataTable columns={columns} data={data} />
    </Shell>
  )
}
