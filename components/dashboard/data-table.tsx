"use client"

import { useState } from "react"
import { Snippet } from "@/types"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { columns } from "@/components/dashboard/data-table-columns"
import { DataTablePagination } from "@/components/dashboard/data-table-pagination"
import { DataTableToolbar } from "@/components/dashboard/data-table-toolbar"
import MobileCard from "@/components/dashboard/mobile-card"

interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[]
  data: Snippet[]
}

export function DataTable<TData>({ data }: DataTableProps<TData>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([
    { id: "date", desc: false },
  ])

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    state: {
      columnFilters,
      sorting,
    },
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const tableFilteredData = table.getFilteredRowModel().rows

  return (
    <>
      <DataTableToolbar table={table} />
      <div className="container">
        <div className="hidden rounded-md border sm:flex">
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
                    No snippets found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col gap-6 sm:hidden">
          {tableFilteredData?.length ? (
            tableFilteredData.map((row) => (
              <MobileCard key={row.id} snippet={row.original} />
            ))
          ) : (
            <div className="text-center">No snippets found</div>
          )}
        </div>
        <div className="mt-8 flex w-full items-end justify-end sm:hidden">
          <DataTablePagination table={table} />
        </div>
      </div>
    </>
  )
}
