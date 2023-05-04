import { Search } from "tabler-icons-react"

import { siteConfig } from "@/config/site"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <div className="flex h-16 w-full items-center gap-6 md:gap-10">
      <div className="hidden flex-1 items-center space-x-2 text-left md:flex">
        <span className="hidden font-bold dark:text-white sm:inline-block">
          {siteConfig.name}
        </span>
      </div>
      <div className="flex-1 gap-2 text-right">
        <div className="flex items-center justify-end">
          <Search className="h-5 cursor-not-allowed text-gray-400" />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
