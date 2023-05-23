"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { formatDate, upperFirst } from "@/lib/utils"

import { Snippet } from "../types"
import { Badge } from "./ui/badge"

const columnHelper = createColumnHelper<Snippet>()

export const columns = [
  columnHelper.accessor("content.title", {
    id: "title",
    cell: (props) => (
      <div className="flex flex-col space-y-1">
        <div className="text-lg font-medium leading-none tracking-tight">
          {upperFirst(props.row.original.content.title)}
        </div>
        <div className="text-sm text-gray-500">
          {upperFirst(props.row.original.content.description)}
        </div>
      </div>
    ),
  }),
  columnHelper.accessor("content.language", {
    id: "language",
    cell: (row) => (
      <Badge className="text-xs" variant="outline">
        <div className="p-1">{upperFirst(row.getValue())}</div>
      </Badge>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (row) => <div>{formatDate(row.getValue())}</div>,
  }),
]
