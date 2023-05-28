import { LanguageFilter, Snippet } from "@/types"

export const snippets: Snippet[] = [
  {
    id: "1",
    date: "2021-09-01",
    content: {
      title: "Snippet 1",
      description: "This is the description for snippet 1",
      language: "javascript",
      code: "console.log('hello world')",
    },
  },
  {
    id: "2",
    date: "2022-05-12",
    content: {
      title: "Snippet 2",
      description: "Lorem ipsum dolor sit amet.",
      language: "typescript",
      code: "print('Lorem ipsum')",
    },
  },
  {
    id: "3",
    date: "2022-08-27",
    content: {
      title: "Snippet 3",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
      language: "typescript",
      code: `
import { snippets } from "data/data"
import { DataTable } from "@/components/SnippetsTable"
import { columns } from "@/components/TableColumns"

export default function SnippetsPage({}) {
  return <DataTable columns={columns} data={snippets} />
}
      `,
    },
  },
  {
    id: "4",
    date: "2023-02-14",
    content: {
      title: "Snippet 4",
      description: "Duis mollis, est non commodo luctus.",
      language: "html",
      code: "Console.WriteLine('Hello, World!')",
    },
  },
  {
    id: "5",
    date: "2023-03-20",
    content: {
      title: "Snippet 5",
      description: "Maecenas faucibus mollis interdum.",
      language: "javascript",
      code: `
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
`,
    },
  },
  {
    id: "6",
    date: "2023-04-08",
    content: {
      title: "Snippet 6",
      description: "Aenean lacinia bibendum nulla sed consectetur.",
      language: "css",
      code: "print('Lorem ipsum dolor sit amet')",
    },
  },
  {
    id: "7",
    date: "2023-04-23",
    content: {
      title: "Snippet 7",
      description: "Praesent commodo cursus magna.",
      language: "css",
      code: "System.out.println('Hello, Snippets!')",
    },
  },
  {
    id: "8",
    date: "2023-05-07",
    content: {
      title: "Snippet 8",
      description: "Aenean eu leo quam.",
      language: "html",
      code: "Console.WriteLine('Greetings, World!')",
    },
  },
  {
    id: "9",
    date: "2023-05-16",
    content: {
      title: "Snippet 9",
      description: "Donec id elit non mi porta gravida at eget metus.",
      language: "javascript",
      code: "console.log('Hello from Snippets!')",
    },
  },
  {
    id: "10",
    date: "2023-05-24",
    content: {
      title: "Snippet 10",
      description: "Vestibulum id ligula porta felis euismod semper.",
      language: "css",
      code: "print('Hello, Snippet World!')",
    },
  },
  {
    id: "11",
    date: "2023-05-24",
    content: {
      title: "Snippet 10",
      description: "Vestibulum id ligula porta felis euismod semper.",
      language: "css",
      code: "print('Hello, Snippet World!')",
    },
  },
  {
    id: "12",
    date: "2023-05-24",
    content: {
      title: "Snippet 11",
      description: "Vestibulum id ligula porta felis euismod semper.",
      language: "css",
      code: "print('Hello, Snippet World!')",
    },
  },
]

export const languages: LanguageFilter[] = [
  {
    value: "javascript",
    label: "Javascript",
  },
  {
    value: "typescript",
    label: "Typescript",
  },
]
