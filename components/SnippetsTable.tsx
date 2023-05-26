"use client"

import { useState } from "react"
import { Snippet } from "@/types"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { columns } from "@/components/TableColumns"
import { SnippetsTableToolbar } from "@/components/TableToolbar"

interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[]
  data: TData[]
}

export function DataTable<TData>({ data }: DataTableProps<TData>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data: data as Snippet[],
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <SnippetsTableToolbar table={table} />
      <ScrollArea className="rounded-md border">
        <Table>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() && "selected"}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>
      <div className="relative bottom-0 flex items-center justify-end space-x-2 pt-4">
        <Button
          disabled={!table.getCanPreviousPage()}
          size="sm"
          variant="outline"
          onClick={() => table.previousPage()}
        >
          Previous
        </Button>
        <Button
          disabled={!table.getCanNextPage()}
          size="sm"
          variant="outline"
          onClick={() => table.nextPage()}
        >
          Next
        </Button>
      </div>
    </>
  )
}
