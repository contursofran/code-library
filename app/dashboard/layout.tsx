import Header from "@/components/Header"
import { NavItem } from "@/components/NavLink"
import PageHeader from "@/components/PageHeader"
import Tabs from "@/components/Tabs"

const tabsItems: NavItem[] = [
  {
    title: "Snippets",
    href: "/dashboard/snippets",
  },
  {
    title: "Bugs",
    href: "/dashboard/bugs",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-40 w-full bg-white dark:bg-dark-background">
        <div className="flex flex-col">
          <Header />
          <Tabs tabs={tabsItems} />
        </div>
      </header>
      <PageHeader />
      <div className="flex h-full bg-gray-50">
        <main className="flex-1">
          <div className="mx-5 lg:mx-20">{children}</div>
        </main>
      </div>
    </div>
  )
}
