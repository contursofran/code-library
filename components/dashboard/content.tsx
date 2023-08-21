import Link from "next/link"
import { Snippet } from "@/types"
import { Code } from "bright"
import darkTheme from "styles/themes/dark-theme.json"
import lightTheme from "styles/themes/light-theme.json"

import { upperFirst } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CopyButton } from "@/components/copy-button"
import { DeleteSnippetButton } from "@/components/dashboard/delete-button"

interface SnippetContentProps {
  snippet: Snippet
}

function fixCode(code: string) {
  const formatedCode = code.trim()

  return formatedCode
}

export function Content({ snippet }: SnippetContentProps) {
  const code = fixCode(snippet.code)

  return (
    <div className="flex flex-1 flex-col ">
      <div className="-mt-9 flex h-fit w-full shrink-0 items-center justify-end gap-3 md:mt-0 ">
        <Link href={`/dashboard/snippets/editor/${snippet.id}`}>
          <Button size="sm">Edit</Button>
        </Link>
        <DeleteSnippetButton snippet={snippet} />
      </div>
      <div className="mt-8 flex flex-1 justify-start md:mr-24 md:justify-center">
        <div className="flex flex-1 flex-col space-y-2 md:max-w-[750px]">
          <h2 className="flex text-2xl font-medium leading-none tracking-tighter md:text-3xl">
            {upperFirst(snippet.title)}
          </h2>
          <p className="h-fit text-base text-muted-foreground md:text-lg">
            {snippet.description}
          </p>
          <div className="!mt-6 flex flex-1 justify-center">
            <div className="flex min-h-[80px] flex-1 rounded-lg border bg-codeblock p-1">
              <div className="flex flex-1 justify-between">
                <div className="grid">
                  <Code
                    className="text-sm"
                    codeClassName="flex"
                    lang={snippet.language}
                    theme={{
                      dark: darkTheme,
                      light: lightTheme,
                      lightSelector: "html.light",
                    }}
                  >
                    {code}
                  </Code>
                </div>
                <CopyButton
                  buttonClassName="bg-codeblock"
                  className="z-20 p-5"
                  code={code}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
