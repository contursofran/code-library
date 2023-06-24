import MainNav from "@/components/layout/MainNav"

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

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-40 w-full bg-background">
        <div className="container flex h-16 items-center space-x-4  sm:justify-between sm:space-x-0">
          <MainNav isLandingPage items={NavItems} />
        </div>
      </header>
      <main className="mx-10 flex-1 md:mx-12 lg:mx-20">{children}</main>
    </div>
  )
}
