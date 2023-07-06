import { redirect } from "next/navigation"

import { tabsItems } from "@/config/dashboard"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { UserAccount } from "@/components/user-account"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages?.signIn || "/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 w-full border-b bg-background">
        <div className="container flex gap-3">
          <MainNav items={tabsItems} />
          <UserAccount user={user} />
        </div>
      </header>
      <div className="flex min-h-screen w-full flex-1 flex-col justify-between">
        <main className="flex w-full flex-1 flex-col justify-between">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
