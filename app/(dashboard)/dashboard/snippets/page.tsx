import { snippets } from "data/data"

import { DataTable } from "@/app/(dashboard)/dashboard/components/DataTable"
import { columns } from "@/app/(dashboard)/dashboard/components/DataTableColumns"

export default function SnippetsPage({}) {
  return <DataTable columns={columns} data={snippets} />
}
