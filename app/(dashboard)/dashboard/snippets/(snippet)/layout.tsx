import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import BackButton from "@/app/(dashboard)/dashboard/snippets/components/BackButton"

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
      <div className="flex w-full grow">
        <BackButton />
        <div className="mt-8 w-full">{children}</div>
      </div>
    </div>
  )
}
