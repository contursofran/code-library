interface FeaturesCardProps {
  description: string
  icon: React.ReactNode
  title: string
}

export function FeaturesCard({ description, icon, title }: FeaturesCardProps) {
  return (
    <div
      className="
     flex h-[140px] flex-col rounded-lg border border-border bg-background p-6 shadow-lg"
    >
      <div className="h-12 w-12">{icon}</div>
      <div className="flex space-x-2 pt-2">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
