import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex h-9 items-center bg-background">
      <div className="flex items-center space-x-4 lg:space-x-4">
        <div className="flex w-[100px] items-center justify-center text-xs font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            className="hidden h-7 w-7 p-0 lg:flex"
            disabled={!table.getCanPreviousPage()}
            variant="outline"
            onClick={() => table.setPageIndex(0)}
          >
            <span className="sr-only">Go to first page</span>
            <Icons.chevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            className="h-7 w-7 p-0"
            disabled={!table.getCanPreviousPage()}
            variant="outline"
            onClick={() => table.previousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <Icons.chevronLeft className="h-4 w-4" />
          </Button>
          <Button
            className="h-7 w-7 p-0"
            disabled={!table.getCanNextPage()}
            variant="outline"
            onClick={() => {
              window.scrollTo({
                top: 10,
                behavior: "smooth",
              }),
                table.nextPage()
            }}
          >
            <span className="sr-only">Go to next page</span>
            <Icons.ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            className="hidden h-7 w-7 p-0 lg:flex"
            disabled={!table.getCanNextPage()}
            variant="outline"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            <span className="sr-only">Go to last page</span>
            <Icons.chevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
