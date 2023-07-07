import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { MainNav } from "@/components/main-nav"
import { UserAccount } from "@/components/user-account"

const NavItems = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "Features",
    href: "/features",
  },
]

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-40 w-full bg-background">
        <div className="container flex h-16 items-center gap-3 space-x-4 sm:justify-between sm:space-x-0">
          <MainNav isLandingPage items={NavItems} />
          {user && <UserAccount isLandingPage user={user} />}
        </div>
      </header>
      <main className="mx-10 flex-1 md:mx-12 lg:mx-20">{children}</main>
    </div>
  )
}
