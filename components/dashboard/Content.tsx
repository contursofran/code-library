import Link from "next/link"
import { Snippet } from "@/types"
import { Code } from "bright"
import tokyoNightTheme from "public/tokyo-night-theme.json"

import { upperFirst } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import CopyButton from "@/components/CopyButton"
import { DeleteSnippetButton } from "@/components/dashboard/DeleteSnippet"
interface SnippetContentProps {
  snippet: Snippet
}

function fixCode(code: string) {
  const formatedCode = code.trim()

  return formatedCode
}

export default function Content({ snippet }: SnippetContentProps) {
  const code = fixCode(snippet.code)

  return (
    <div className="flex h-fit">
      <div className="mx-auto mt-8 max-w-[750px] grow justify-center">
        <div className="flex h-full flex-col space-y-2">
          <h2 className="flex text-3xl font-medium leading-none tracking-tighter">
            {upperFirst(snippet.title)}
          </h2>
          <p className="h-fit text-lg text-muted-foreground">
            {snippet.description}
          </p>
          <div className="!mt-6 flex h-full w-full justify-center">
            <div className="h-full min-h-[80px] w-full rounded-lg border p-1">
              <div className="flex h-full w-full justify-between ">
                <Code
                  className="flex w-full items-center text-sm"
                  codeClassName="flex item-center h-full"
                  lang={snippet.language}
                  theme={{
                    dark: tokyoNightTheme,
                    light: "min-light",
                    lightSelector: "html.light",
                  }}
                >
                  {code}
                </Code>
                <CopyButton className="z-20 p-5" code={code} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-24 shrink-0 items-center justify-end gap-3">
        <Link href={`/dashboard/snippets/editor/${snippet.id}`}>
          <Button size="sm">Edit</Button>
        </Link>
        <DeleteSnippetButton snippet={snippet} />
      </div>
    </div>
  )
}
