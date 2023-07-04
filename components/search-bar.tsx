import { Search } from "tabler-icons-react"

import { Input } from "./ui/input"

export default function SearchBar({}) {
  return (
    <div className=" w-96 ">
      <Input
        className="h-9"
        icon={<Search size={17} />}
        placeholder="Search snippet"
      />
    </div>
  )
}
