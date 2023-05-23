import { snippets } from "data/data"

import { Snippet } from "@/types/index"
import { DataTable } from "@/components/SnippetsTable"
import { columns } from "@/components/TableColumns"

export default function SnippetsPage({}) {
  return <DataTable columns={columns} data={snippets} />
}
