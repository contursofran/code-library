import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import BackButton from "@/app/(dashboard)/dashboard/snippets/(actions)/components/BackButton"
import { DeleteSnippetButton } from "@/app/(dashboard)/dashboard/snippets/(actions)/components/DeleteSnippet"

interface SnippetLayoutProps {
  children: React.ReactNode
}

export default async function SnippetLayout({ children }: SnippetLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages?.signIn || "login")
  }

  return (
    <div className="container mt-8 flex w-full justify-between">
      <div className="flex w-full items-start">
        <BackButton />
        <div className="mx-auto w-full justify-center px-48">{children}</div>
      </div>
    </div>
  )
}
