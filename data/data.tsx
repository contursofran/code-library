import { BrandReact } from "tabler-icons-react"

import { FilterOptions, Snippet } from "../types"

export const snippets: Snippet[] = [
  {
    content: {
      code: "console.log('hello world')",
      description: "Print hello world",
      title: "Test",
      language: "javascript",
    },
    date: "2023-03-03",
    id: "1",
    tags: ["tag1", "tag2"],
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
    tags: ["tag1", "tag2"],
  },
]

export const languages: FilterOptions[] = [
  {
    value: "javascript",
    label: "Javascript",
  },
  {
    value: "typescript",
    label: "Typescript",
  },
]
