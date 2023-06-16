import { Snippet } from "@/types"
import { Code } from "bright"
import tokyoNightTheme from "public/tokyo-night-theme.json"

import CopyButton from "@/app/(dashboard)/dashboard/components/CopyButton"
import Editor from "@/app/(dashboard)/dashboard/components/Editor"

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
    <div className="container mt-8 flex h-full w-full flex-col gap-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-2xl tracking-tight">{snippet.title}</div>
          <div className="text-lg dark:text-gray-500">
            {snippet.description}
          </div>
        </div>
        <Editor action="edit" snippet={snippet} />
      </div>
      <div className="flex w-full justify-center">
        <div className="w-3/5 rounded-lg border p-1">
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
  )
}
