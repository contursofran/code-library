import { NavItem } from "@/types/index"
import { tabsItems } from "@/config/dashboard"
import MainNav from "@/components/MainNav"
import PageHeader from "@/components/PageHeader"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 w-full border-b bg-white dark:bg-dark-background">
        <div className="container flex flex-col">
          <MainNav items={tabsItems} />
        </div>
      </header>
      <main className="container flex w-full flex-1 flex-col gap-6">
        <PageHeader />
        {children}
      </main>
    </div>
  )
}
