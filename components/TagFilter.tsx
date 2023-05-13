import { SortAscending, SortDescending, Tag } from "tabler-icons-react"

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
      <SelectTrigger className="w-40 lg:w-48">
        <SelectValue
          placeholder={
            <div className="flex items-center">
              <Tag size={18} />
              <span className="ml-2">Filter by tag</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Ascending">
          {
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="ml-2">Typescript</span>
            </div>
          }
        </SelectItem>
        <SelectItem value="Descending">
          {
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="ml-2">Javascript</span>
            </div>
          }
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
