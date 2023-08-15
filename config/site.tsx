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
    icon: <Icons.nextjs className="h-10 w-10" />,
    title: "Next.js 13",
    body: <>Latest features from Next 13 using the brand new App Router.</>,
  },
  {
    icon: <Icons.react className="h-10 w-10" />,
    title: "React 18",
    body: <>Server and Client Components.</>,
  },
  {
    icon: <Icons.shadcn className="h-10 w-10" />,
    title: "Components",
    body: (
      <>
        Ui components from{" "}
        <a
          className="font-medium underline underline-offset-4"
          href="https://ui.shadcn.com/"
          rel="noreferrer"
          target="_blank"
        >
          shadcn
        </a>
        .
      </>
    ),
  },
  {
    icon: <Icons.nextAuth className="h-10 w-10" />,
    title: "Authentication",
    body: (
      <>
        Authentication using{" "}
        <a
          className="font-medium underline underline-offset-4"
          href="https://next-auth.js.org/"
          rel="noreferrer"
          target="_blank"
        >
          NextAuth.js
        </a>{" "}
        and middlewares.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <Icons.trpc className="h-10 w-10" />
        <Icons.prisma className="h-10 w-10" />
      </div>
    ),
    title: "Full-stack Typesafety",
    body: (
      <>
        Full-stack Typesafety with{" "}
        <a
          className="font-medium underline underline-offset-4"
          href="https://ui.shadcn.com/"
          rel="noreferrer"
          target="_blank"
        >
          tRPC
        </a>
        . ORM using{" "}
        <a
          className="font-medium underline underline-offset-4"
          href="https://ui.shadcn.com/"
          rel="noreferrer"
          target="_blank"
        >
          Prisma
        </a>
        .
      </>
    ),
  },
  {
    icon: <Icons.vercel className="h-10 w-10" />,
    title: "Vercel Postgres",
    body: <>Database using Vercel Postgres.</>,
  },
]
