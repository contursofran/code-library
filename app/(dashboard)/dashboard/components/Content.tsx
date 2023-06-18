import Link from "next/link"
import { Snippet } from "@/types"
import { Code } from "bright"
import tokyoNightTheme from "public/tokyo-night-theme.json"
import { ArrowLeft, ChevronDownLeft, ChevronLeft } from "tabler-icons-react"

import CopyButton from "@/app/(dashboard)/dashboard/components/CopyButton"
import { DeleteSnippetButton } from "@/app/(dashboard)/dashboard/components/DeleteSnippet"
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
    <div className="container mt-8 flex h-full w-full justify-between">
      <div className="flex w-full items-start">
        <Link
          className="flex items-center gap-1 text-gray-400 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          href={"/dashboard/snippets"}
        >
          <ChevronLeft className="h-4 w-4" />
          <div className="text-sm font-medium">Back</div>
        </Link>
        <div className="mx-48 mt-12 flex w-full flex-col gap-1">
          <div className="text-2xl leading-none">{snippet.title}</div>
          <div className="text-lg dark:text-gray-500">
            {snippet.description}
          </div>
          <div className="mt-3 flex w-full justify-center">
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
      <Editor action="edit" snippet={snippet} />
    </div>
  )
}
