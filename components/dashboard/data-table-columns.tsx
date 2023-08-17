"use client"

import { useState } from "react"
import Link from "next/link"
import { Snippet } from "@/types"
import { CellContext, createColumnHelper } from "@tanstack/react-table"

import { cn, formatDate, upperFirst } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { CopyButton } from "@/components/copy-button"

const columnHelper = createColumnHelper<Snippet>()

export const columns = [
  columnHelper.accessor("title", {
    id: "title",
    cell: (props) => <SnippetTitle props={props} />,
  }),
  columnHelper.accessor("language", {
    id: "language",
    cell: (row) => (
      <Badge className="text-xs" variant="outline">
        <div className="p-1 text-xs">{upperFirst(row.getValue())}</div>
      </Badge>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  }),
  columnHelper.accessor("date", {
    id: "date",
    cell: (row) => (
      <div className="truncate text-xs font-medium sm:text-sm">
        {formatDate(row.getValue())}
      </div>
    ),
  }),
  // columnHelper.accessor("code", {
  //   id: "code",
  //   cell: (row) => (
  //     <CopyButton
  //       className="hidden w-full justify-end align-middle sm:flex"
  //       code={row.getValue()}
  //     />
  //   ),
  //   maxSize: 20,
  // }),
]

function SnippetTitle({ props }: { props: CellContext<Snippet, string> }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      className="hover:cursor-pointer"
      href={`/dashboard/snippets/${props.row.original.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-1">
        <div
          className={cn(
            isHovered && "underline",
            "max-h-8 text-sm font-medium tracking-tight sm:text-lg sm:leading-none"
          )}
        >
          {upperFirst(props.row.original.title)}
        </div>
        <div className="max-h-4 truncate text-xs font-medium text-gray-500 sm:text-sm">
          {upperFirst(props.row.original.description)}
        </div>
      </div>
    </Link>
  )
}
