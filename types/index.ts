import { Snippet as SnippetPrisma } from "@prisma/client"

import { Language } from "@/lib/languages"

export type Snippet = Pick<
  SnippetPrisma,
  "id" | "title" | "code" | "description" | "date" | "language"
>

export interface SnippetContent {
  code: string
  description: string
  language: Language
  title: string
}

export interface NavItem {
  href: string
  title: string
  disabled?: boolean
}

export interface SidebarNavItem {
  title: string
  items: NavItem[]
}
