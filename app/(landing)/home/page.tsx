import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"

export default function Home({}) {
  return (
    <section className="container flex h-full flex-col-reverse items-center justify-center gap-24 md:flex-row md:justify-between">
      <div className="flex-col space-y-4">
        <div className="mx-auto flex flex-col items-center gap-4 text-center md:items-start md:text-start">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tighter md:text-3xl lg:text-4xl xl:text-5xl">
            What&apos;s this about?
          </h1>
          <p className="max-w-[42rem] text-xl leading-normal text-muted-foreground sm:leading-8 md:text-lg xl:text-xl">
            This is an app where you can store code snippets, built to showcase
            the latest features of Next.js 13.
          </p>
        </div>
        <div className="flex justify-center gap-4 md:justify-start">
          <Link href="/login">
            <Button className="h-9 md:text-sm xl:h-10 xl:text-base">
              Get Started
            </Button>
          </Link>
          <Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
            <Button
              className="h-9 md:text-sm xl:h-10 xl:text-base"
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
