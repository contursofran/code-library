import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import Hero from "@/app/(landing)/components/Hero"

export default function Home({}) {
  return (
    <section className="container flex h-full flex-col-reverse items-center justify-center gap-24 sm:flex-row sm:justify-between">
      <div className="flex-col space-y-4">
        <div className="mx-auto flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold leading-[1.1] tracking-tighter md:text-4xl lg:text-5xl">
            What&apos;s this about?
          </h1>
          <p className="max-w-[42rem] text-base leading-normal text-muted-foreground sm:leading-8 md:text-lg lg:text-xl">
            I&apos;m building a code library to store snippets using the new
            router, server components and more in Next.js 13.
          </p>
        </div>
        <div className="flex gap-4 ">
          <Link href="/login">
            <Button className="h-8 md:h-9 md:text-sm lg:h-10 lg:text-base">
              Get Started
            </Button>
          </Link>
          <Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
            <Button
              className="h-8 md:h-9 md:text-sm lg:h-10 lg:text-base"
              variant="outline"
            >
              GitHub
            </Button>
          </Link>
        </div>
      </div>
      <Hero />
    </section>
  )
}
