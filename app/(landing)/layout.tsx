import { navItems } from "@/config/site"
import { getCurrentUser } from "@/lib/session"
import { MainNav } from "@/components/main-nav"
import { UserAccount } from "@/components/user-account"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex h-screen flex-col">
      <header className="w-full bg-background">
        <div className="container flex h-16 items-center gap-3 space-x-2 sm:justify-between ">
          <MainNav isLandingPage items={navItems} />
          {user && <UserAccount isLandingPage user={user} />}
        </div>
      </header>
      <main className="flex-1 sm:mx-10 md:mx-12 xl:mx-20">{children}</main>
    </div>
  )
}
