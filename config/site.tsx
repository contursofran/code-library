import { features } from "process"
import React from "react"
import App from "next/app"
import { NavItem } from "@/types"
import { Router } from "lucide-react"

import { Icons } from "@/components/icons"

interface SiteConfig {
  description: string
  links: {
    github: string
  }
  name: string
}

interface siteFeature {
  icon: React.ReactElement<typeof Icons>
  title: string
  body: JSX.Element
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
]

export const siteFeatures: siteFeature[] = [
  {
    icon: <Icons.bell />,
    title: "Next.js 13",
    body: <>Latest features from Next 13 using the brand new App Router.</>,
  },
]
