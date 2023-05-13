import { Search } from "tabler-icons-react"

import { Input } from "./ui/input"

export default function SearchBar({}) {
  return (
    <div className="mr-16 w-96 lg:w-[500px]">
      <Input icon={<Search size={17} />} placeholder="Search snippet" />
    </div>
  )
}
