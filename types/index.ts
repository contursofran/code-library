import { Language } from "@/lib/languages"

export interface Snippet {
  content: SnippetContent
  date: string
  id: string
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
