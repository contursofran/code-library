export interface Snippet {
  content: SnippetContent
  date: string
  id: string
  tags: string[]
}

export interface SnippetContent {
  code: string
  description: string
  language: string
  title: string
}

export interface NavItem {
  href: string
  isTab?: boolean
  title: string
}