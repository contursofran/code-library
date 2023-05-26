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
  code = code.replace(/^[ \t]+/gm, "")

  return code
}

export default function SnippetContent({ snippet }: SnippetContentProps) {
  const code = fixCode(snippet.content.code)

  console.log(code)

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <div className="text-2xl font-medium">{snippet.content.title}</div>
          <div className="text-lg dark:text-gray-500">
            {snippet.content.description}
          </div>
        </div>
        <Button size="sm">Edit</Button>
      </div>
      <div className="flex w-full justify-center">
        <div className="m-4 flex w-3/5 justify-around rounded-lg border">
          {/* @ts-expect-error */}
          <Code
            className="w-full text-sm"
            codeClassName="-my-2 mx-3"
            lang={snippet.content.language}
            theme={tokyoNightTheme}
          >
            {code}
          </Code>
          <CopyButton className="p-4" code={code} />
        </div>
      </div>
    </div>
  )
}
