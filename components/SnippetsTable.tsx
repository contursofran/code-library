"use client"

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { formatDate, upperFirst } from "@/lib/utils"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import { Snippet } from "../types"
import { Badge } from "./ui/badge"

interface DataTableProps<TData> {
  data: TData[]
}

const columnHelper = createColumnHelper<Snippet>()

export function DataTable<TData>({ data }: DataTableProps<TData>) {
  const columns = [
    columnHelper.accessor("content", {
      cell: (row) => (
        <div className="flex flex-col space-y-1">
          <div className="text-lg font-medium leading-none tracking-tight">
            {upperFirst(row.getValue().title)}
          </div>
          <div className="text-sm text-gray-500">
            {upperFirst(row.getValue().description)}
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("content.language", {
      cell: (row) => (
        <Badge className="text-xs" variant="outline">
          <div className="p-1">{upperFirst(row.getValue())}</div>
        </Badge>
      ),
    }),
    columnHelper.accessor("tags", {
      cell: (row) => (
        <div className="flex flex-wrap items-center">
          {row.getValue().map((tag) => (
            <Badge className="mr-2 dark:bg-slate-50" key={tag}>
              {upperFirst(tag)}
            </Badge>
          ))}
        </div>
      ),
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (row) => <div>{formatDate(row.getValue())}</div>,
    }),
  ]

  const table = useReactTable({
    data: data as Snippet[],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
