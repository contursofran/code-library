import Header from "@/components/Header"
import Tabs from "@/components/Tabs"

const tabsItems = [
  {
    title: "Snippets",
    href: "/dashboard/snippets",
    id: "1",
  },
  {
    title: "Bugs",
    href: "/dashboard/bugs",
    id: "2",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    id: "3",
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-40 w-full bg-white dark:bg-dark-background">
        <div className="container flex flex-col">
          <Header />
          <Tabs tabs={tabsItems} />
        </div>
      </header>
      <div className="flex h-full">
        <main className="mx-5 flex-1  lg:mx-10">{children}</main>
      </div>
    </div>
  )
}
