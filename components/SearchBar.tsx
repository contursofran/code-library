import { Search } from "tabler-icons-react"

import { Input } from "./ui/input"

export default function SearchBar({}) {
  return (
    <div className="mr-16 w-full pt-4">
      <Input icon={<Search size={17} />} placeholder="Search snippet" />
    </div>
  )
}
