"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { formatDate } from "@/lib/utils"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import { Snippet } from "../types"

interface DataTableProps<TData> {
  data: TData[]
}

type SnippetColumnDef<TValue> = ColumnDef<Snippet, TValue>

export function DataTable<TData, TValue>({ data }: DataTableProps<TData>) {
  const columns: SnippetColumnDef<TValue>[] = [
    {
      accessorKey: "content.title",
    },
    {
      accessorKey: "content.language",
    },
    {
      accessorKey: "tags",
    },
    {
      accessorKey: "date",
      cell: ({ row }) => {
        return <div>{formatDate(row.getValue("date"))}</div>
      },
    },
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
