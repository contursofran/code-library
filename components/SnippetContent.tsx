import { Snippet } from "@/types"
import { Code } from "bright"
import tokyoNightTheme from "public/tokyo-night-theme.json"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import CopyButton from "@/components/CopyButton"

interface SnippetContentProps {
  snippet: Snippet
}

function fixCode(code: string) {
  code = code.trim()

  return code
}

export default function SnippetContent({ snippet }: SnippetContentProps) {
  const code = fixCode(snippet.content.code)

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-medium">{snippet.content.title}</div>
          <div className="text-lg dark:text-gray-500">
            {snippet.content.description}
          </div>
        </div>
        <Button size="sm">Edit</Button>
      </div>
      <div className="flex w-full justify-center overflow-hidden">
        <ScrollArea className="m-4 w-3/5 rounded-lg border p-1">
          {/* @ts-expect-error */}
          <Code
            className="w-full text-sm"
            codeClassName="-my-2 mx-3"
            lang={snippet.content.language}
            theme={{
              dark: tokyoNightTheme,
              light: "min-light",
              lightSelector: "html.light",
            }}
          >
            {code}
          </Code>
          <CopyButton className="absolute right-2 top-2 p-2" code={code} />
        </ScrollArea>
      </div>
    </div>
  )
}
