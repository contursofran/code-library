import { LanguageFilter, Snippet } from "@/types"

export const snippets: Snippet[] = [
  {
    content: {
      code: "<nav>",
      description: "Sticky navbar",
      title: "Test",
      language: "javascript",
    },
    date: "2023-03-03",
    id: "1",
  },
  {
    content: {
      code: "console.log('hello world')",
      description: "Print hello world",
      title: "Hello world",
      language: "typescript",
    },
    date: "2023-03-03",
    id: "2",
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
