import MainNav from "@/components/MainNav"
import { NavItem } from "@/components/NavLink"
import PageHeader from "@/components/PageHeader"

const tabsItems: NavItem[] = [
  {
    title: "Snippets",
    href: "/dashboard/snippets",
  },
  {
    title: "Bugs",
    href: "/dashboard/bugs",
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <header className="w-full border-b bg-white dark:bg-dark-background">
        <div className="container flex flex-col">
          <MainNav items={tabsItems} />
        </div>
      </header>
      <div className="container">
        <PageHeader />
        <div className="flex h-full">
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}
