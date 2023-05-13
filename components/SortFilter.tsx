import { ArrowsSort, SortAscending, SortDescending } from "tabler-icons-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SortFilter({}) {
  return (
    <Select>
      <SelectTrigger className="w-40 lg:w-48">
        <SelectValue
          placeholder={
            <div className="flex items-center">
              <ArrowsSort size={18} />
              <span className="ml-2">Sort by</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Ascending">
          {
            <div className="flex">
              <SortAscending size={18} />
              <span className="ml-2">Ascending</span>
            </div>
          }
        </SelectItem>
        <SelectItem value="Descending">
          {
            <div className="flex">
              <SortDescending size={18} />
              <span className="ml-2">Descending</span>
            </div>
          }
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
