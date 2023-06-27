import Link from "next/link"
import { Snippet } from "@/types"
import { Code } from "bright"
import tokyoNightTheme from "public/tokyo-night-theme.json"

import { Button } from "@/components/ui/button"
import CopyButton from "@/components/CopyButton"

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
    <div className="flex">
      <div className="mx-auto max-w-[750px] grow justify-center">
        <div className="flex flex-col">
          <div className="flex h-10 items-center">
            <h2 className="flex py-2 text-3xl font-medium">{snippet.title}</h2>
          </div>
          <p className="h-20 py-2 text-lg text-muted-foreground">
            {snippet.description}
          </p>
          <div className="-mt-5 flex w-full justify-center">
            <div className="w-full rounded-lg border p-1">
              <div className="flex justify-between">
                <Code
                  className="w-full text-sm"
                  codeClassName="-my-2 mx-2"
                  lang={snippet.language}
                  theme={{
                    dark: tokyoNightTheme,
                    light: "min-light",
                    lightSelector: "html.light",
                  }}
                >
                  {code}
                </Code>
                <CopyButton className="p-2" code={code} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-8 flex h-16 w-24 shrink-0 items-center justify-end">
        <Link href={`/dashboard/snippets/editor/${snippet.id}`}>
          <Button size="sm">Edit</Button>
        </Link>
      </div>
    </div>
  )
}
