"use client"

import { Table } from "@tanstack/react-table"
import { languages } from "data/data"

import { Input } from "@/components/ui/input"
import LanguageFilter from "@/components/LanguageFilter"

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
          <LanguageFilter
            column={table.getColumn("language")}
            languages={languages}
          />
        )}
      </div>
    </div>
  )
}
