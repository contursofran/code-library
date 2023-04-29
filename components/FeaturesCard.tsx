interface FeaturesCardProps {
  description: string
  icon: React.ReactNode
  title: string
}

export function FeaturesCard({ description, icon, title }: FeaturesCardProps) {
  return (
    <div
      className="
     flex h-[140px] flex-col rounded-lg border border-gray-100 bg-white p-6 text-black shadow-lg dark:border-[#24222e] dark:bg-[#1b1925]  "
    >
      <div className="h-12 w-12 text-black dark:text-gray-400 ">{icon}</div>
      <div className="flex space-x-2 pt-2">
        <div>
          <h3 className="font-medium text-black dark:text-white">{title}</h3>
          <p className="text-sm text-black dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}
