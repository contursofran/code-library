import { MainNav } from "@/components/MainNav"

const NavItems = [
  {
    title: "Snippets",
    href: "/dashboard/snippets",
  },
  // {
  //   title: "Bugs",
  //   href: "/dashboard/bugs",
  // },
  // {
  //   title: "Settings",
  //   href: "/dashboard/settings",
  // },
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
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav searchBar items={NavItems} />
        </div>
      </header>
      <div className="flex h-full">
        <main className="mx-5 flex-1  lg:mx-10">{children}</main>
      </div>
    </div>
  )
}
