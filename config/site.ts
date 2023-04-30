import { NavItem } from "@/types/nav"

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
