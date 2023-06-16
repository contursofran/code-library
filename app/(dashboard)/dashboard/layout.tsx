import { redirect } from "next/navigation"

import { tabsItems } from "@/config/dashboard"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import MainNav from "@/components/MainNav"
import UserAccount from "@/components/UserAccount"
import Footer from "@/app/(dashboard)/dashboard/components/Footer"
import Header from "@/app/(dashboard)/dashboard/components/Header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages?.signIn || "login")
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
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
}
