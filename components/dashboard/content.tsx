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
    <div className="flex h-fit flex-col-reverse lg:flex-row">
      <div className="mx-auto mt-8 w-full grow justify-center lg:max-w-[750px]">
        <div className="flex h-full flex-col space-y-2">
          <h2 className="flex text-xl font-medium leading-none tracking-tighter lg:text-3xl">
            {upperFirst(snippet.title)}
          </h2>
          <p className="h-fit text-sm text-muted-foreground lg:text-lg">
            {snippet.description}
          </p>
          <div className="!mt-6 flex h-full w-full justify-center">
            <div className="h-full min-h-[80px] w-full rounded-lg border bg-codeblock p-1">
              <div className="flex h-full w-full justify-between ">
                <Code
                  className="flex w-full items-center text-sm"
                  codeClassName="flex item-center h-full"
                  lang={snippet.language}
                  theme={{
                    dark: darkTheme,
                    light: lightTheme,
                    lightSelector: "html.light",
                  }}
                >
                  {code}
                </Code>
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
      <div className="z-0 -mt-9 flex h-fit w-full shrink-0 items-center justify-end gap-3 lg:mt-0 lg:w-24">
        <Link href={`/dashboard/snippets/editor/${snippet.id}`}>
          <Button size="sm">Edit</Button>
        </Link>
        <DeleteSnippetButton snippet={snippet} />
      </div>
    </div>
  )
}
