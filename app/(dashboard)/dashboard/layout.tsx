import { tabsItems } from "@/config/dashboard"
import MainNav from "@/components/MainNav"
import Footer from "@/app/(dashboard)/dashboard/components/Footer"
import Header from "@/app/(dashboard)/dashboard/components/Header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 w-full border-b bg-background">
        <div className="container flex flex-col">
          <MainNav items={tabsItems} />
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}
