import { MainNav } from "@/components/MainNav"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-40 w-full bg-white dark:bg-dark-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav />
        </div>
      </header>
      <main className="mx-10 flex-1 md:mx-12 lg:mx-20">{children}</main>
    </div>
  )
}
