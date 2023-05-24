"use client"

import { useState } from "react"
import Link from "next/link"
import { Snippet } from "@/types"
import { CellContext, createColumnHelper } from "@tanstack/react-table"

import { cn, formatDate, upperFirst } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const columnHelper = createColumnHelper<Snippet>()

export const columns = [
  columnHelper.accessor("content.title", {
    id: "title",
    cell: (props) => <SnippetTitle props={props} />,
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

function SnippetTitle({ props }: { props: CellContext<Snippet, string> }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      className="flex flex-col space-y-1 hover:cursor-pointer"
      href={`/dashboard/snippets/${props.row.original.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          isHovered && "underline",
          "text-lg font-medium leading-none tracking-tight "
        )}
      >
        {upperFirst(props.row.original.content.title)}
      </div>
      <div className="text-sm text-gray-500">
        {upperFirst(props.row.original.content.description)}
      </div>
    </Link>
  )
}
