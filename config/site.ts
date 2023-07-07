import { NavItem } from "@/types"

interface SiteConfig {
  description: string
  links: {
    github: string
  }
  name: string
}

export const siteConfig: SiteConfig = {
  name: "Code library",
  description: "A website to store code snippets.",
  links: {
    github: "https://github.com/fconturso/code-library",
  },
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Docs",
    href: "/docs",
  },
]
