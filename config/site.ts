import { NavItem } from "@/types/nav"

interface SiteConfig {
  description: string
  links: {
    github: string
  }
  mainNav: NavItem[]
  name: string
}

export const siteConfig: SiteConfig = {
  name: "Code library",
  description: "A website to store code snippets.",
  mainNav: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Features",
      href: "/features",
    },
  ],
  links: {
    github: "https://github.com/fconturso/code-library",
  },
}
