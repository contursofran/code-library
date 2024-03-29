import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function BackButton() {
  return (
    <div className="z-20 flex h-fit w-24 shrink-0">
      <Link
        className="flex h-fit items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
        href={"/dashboard/snippets"}
      >
        <Button size="sm" variant="outline">
          <Icons.chevronLeft className="mr-1 flex h-4 w-4" />
          <div className="text-sm font-medium">Back</div>
        </Button>
      </Link>
    </div>
  )
}
