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
  code = code.trim()

  return code
}

export default function Content({ snippet }: SnippetContentProps) {
  const code = fixCode(snippet.code)

  return (
    <div className="flex h-full">
      <div className="mx-auto mt-8 h-[calc(100%-32px-64px)] max-w-[750px] justify-center">
        <div className="flex h-full flex-col space-y-2">
          <h2 className="flex text-3xl font-medium leading-none tracking-tighter">
            {upperFirst(snippet.title)}
          </h2>
          <p className="h-fit text-lg text-muted-foreground">
            {snippet.description}
          </p>
          <div className="!mt-6 flex h-full min-h-0 w-full justify-center">
            <div className="h-full max-h-fit w-full rounded-lg  border p-1 pb-8">
              <div className="flex h-full w-full justify-between">
                <ScrollArea className="z-10 mr-[-72px] h-full w-full">
                  <Code
                    className="h-full w-full text-sm"
                    codeClassName="-my-2 ml-2"
                    lang={snippet.language}
                    theme={{
                      dark: tokyoNightTheme,
                      light: "min-light",
                      lightSelector: "html.light",
                    }}
                  >
                    {code}
                  </Code>
                </ScrollArea>
                <CopyButton className="z-20 p-4" code={code} />
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
