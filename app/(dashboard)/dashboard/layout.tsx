import { redirect } from "next/navigation"

import { tabsItems } from "@/config/dashboard"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import Header from "@/components/Header"
import MainNav from "@/components/MainNav"
import UserAccount from "@/components/UserAccount"

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
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 w-full border-b bg-background">
        <div className="container flex gap-3">
          <MainNav items={tabsItems} />
          <UserAccount user={user} />
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col justify-between">
        <div className="flex flex-col gap-4">
          <Header />
          {children}
        </div>
        {/* <Footer /> */}
      </main>
    </div>
  )
}
