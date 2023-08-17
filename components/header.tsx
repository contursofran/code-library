interface HeaderProps {
  children?: React.ReactNode
  title: string
  description?: string
}

export function Header({ title, description, children }: HeaderProps) {
  return (
    <div className="container  flex w-full items-center justify-between gap-4 pt-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium sm:text-2xl">{title}</h1>
          <div className="pt-1 text-sm text-muted-foreground sm:text-base">
            {description}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
