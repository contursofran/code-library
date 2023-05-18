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
      <SelectTrigger className="h-9 w-36">
        <SelectValue
          placeholder={
            <div className="flex items-center">
              <ArrowsSort size={18} />
              <span className="ml-[5px]">Sort by</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Ascending">
          {
            <div className="flex items-center">
              <SortAscending size={18} />
              <span className="ml-[5px]">Ascending</span>
            </div>
          }
        </SelectItem>
        <SelectItem value="Descending">
          {
            <div className="flex items-center">
              <SortDescending size={18} />
              <span className="ml-[5px]">Descending</span>
            </div>
          }
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
