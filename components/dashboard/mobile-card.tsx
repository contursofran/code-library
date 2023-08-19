import Link from "next/link"
import { redirect } from "next/navigation"
import { Snippet } from "@/types"
import { CircleIcon } from "lucide-react"

import { cn, copyToClipboard, formatDate, upperFirst } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CopyButton } from "@/components/copy-button"
import { Icons } from "@/components/icons"

interface MobileCardProps {
  snippet: Snippet
}

export default function MobileCard({ snippet }: MobileCardProps) {
  return (
    <Card className="max-h-[145.99px]">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0 font-medium">
        <div className="space-y-1">
          <CardTitle className="truncate text-lg">
            {upperFirst(snippet.description)}
          </CardTitle>
          <CardDescription className="truncate text-sm font-medium">
            {upperFirst(snippet.description)}
          </CardDescription>
        </div>
        <div className="flex shrink-0 items-end justify-end ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <Icons.veritcalDots className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="flex items-center justify-start"
                onClick={() => copyToClipboard(snippet.code)}
              >
                <Icons.copy className="h-3 w-3" />
                <span className="ml-2 font-normal">Copy</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  className="flex items-center justify-start"
                  href={`/dashboard/snippets/${snippet.id}`}
                >
                  <Icons.edit className="h-3 w-3" />
                  <span className="ml-2 font-normal">Edit</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center text-sm font-medium">
            <CircleIcon className="mr-1 h-2 w-2 fill-primary" />
            {upperFirst(snippet.language)}
          </div>
          <div className="text-sm font-medium">{formatDate(snippet.date)}</div>
        </div>
      </CardContent>
    </Card>
  )
}
