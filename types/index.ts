import { Icon } from "tabler-icons-react"

export interface Snippet {
  content: SnippetContent
  date: string
  id: string
}

export type Language = "javascript" | "typescript" | "css" | "html"

export interface LanguageFilter {
  label: string
  value: Language
}

export interface SnippetContent {
  code: string
  description: string
  language: Language
  title: string
}

export interface NavItem {
  href: string
  isTab?: boolean
  title: string
}
