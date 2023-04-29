interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-full">
        <main className="mx-5 flex-1  lg:mx-10">{children}</main>
      </div>
    </div>
  )
}
