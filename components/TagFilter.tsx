import { Tag } from "tabler-icons-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TagFilter({}) {
  return (
    <Select>
      <SelectTrigger className="h-9 w-36">
        <SelectValue
          placeholder={
            <div className="flex items-center">
              <Tag size={18} />
              <span className="ml-[5px]">Filter by</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Ascending">
          {
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="ml-[5px]">Typescript</span>
            </div>
          }
        </SelectItem>
        <SelectItem value="Descending">
          {
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="ml-[5px]">Javascript</span>
            </div>
          }
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
