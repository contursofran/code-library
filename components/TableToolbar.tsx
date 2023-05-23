"use client"

import { Table } from "@tanstack/react-table"
import { languages } from "data/data"

import FacetedFilter from "./FacetedFilter"
import { Input } from "./ui/input"

interface SnippetsTableToolbarProps<TData> {
  table: Table<TData>
}

export function SnippetsTableToolbar<TData>({
  table,
}: SnippetsTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search snippets..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
        />
        {table.getColumn("language") && (
          <FacetedFilter
            column={table.getColumn("language")}
            options={languages}
            title="Language"
          />
        )}
      </div>
    </div>
  )
}
