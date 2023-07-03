interface HeaderProps {
  children?: React.ReactNode
  title: string
  description?: string
}

export default function Header({ title, description, children }: HeaderProps) {
  return (
    <div className="container flex w-full items-center justify-between pt-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">{title}</h1>
          <div className="pt-1 text-muted-foreground">{description}</div>
        </div>
      </div>
      {children}
    </div>
  )
}
