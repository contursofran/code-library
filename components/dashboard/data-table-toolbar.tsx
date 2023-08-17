"use client"

import { Table } from "@tanstack/react-table"

import { languages } from "@/lib/languages"
import { cn } from "@/lib/utils"
import { useStickyDetection } from "@/hooks/useStickyDetection"
import { Input } from "@/components/ui/input"
import { DataTablePagination } from "@/components/dashboard/data-table-pagination"
import { LanguageFilter } from "@/components/dashboard/language-filter"

interface SnippetsTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: SnippetsTableToolbarProps<TData>) {
  const { isSticky, stickyRef } = useStickyDetection(65)

  return (
    <div
      className={cn(isSticky && "border-y bg-background", "sticky top-16")}
      ref={stickyRef}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex max-w-xl grow items-center justify-between md:max-w-lg">
          <div className="flex flex-1 items-center gap-8 sm:gap-4">
            <Input
              className="h-9"
              placeholder="Search snippets..."
              value={
                (table.getColumn("title")?.getFilterValue() as string) ?? ""
              }
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
        <div className="hidden sm:flex">
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  )
}
