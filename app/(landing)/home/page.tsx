import Link from "next/link"

import { siteConfig } from "@/config/site"
import Hero from "@/components/Hero"

export default async function Home({}) {
  return (
    <section className="container flex h-full flex-col-reverse items-center justify-center gap-24 sm:flex-row sm:justify-between">
      <div className="flex-col space-y-4">
        <div className="mx-auto flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold leading-[1.1] tracking-tighter dark:text-white md:text-4xl lg:text-5xl">
            What&apos;s this about?
          </h1>
          <p className="max-w-[42rem] text-base leading-normal dark:text-gray-300 sm:leading-8 md:text-lg lg:text-xl">
            I&apos;m building a code library to store snippets using the new
            router, server components and more in Next.js 13.
          </p>
        </div>
        <div className="flex gap-4 ">
          <Link
            className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-black px-6 py-2 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-white dark:text-black md:h-9 md:text-sm lg:h-10 lg:text-base"
            href="/dashboard"
          >
            Get Started
          </Link>
          <Link
            className="relative inline-flex h-8 items-center rounded-md border border-slate-200 bg-white px-8 py-2 text-xs font-medium text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:border-slate-800 dark:bg-dark-background dark:text-white md:h-9 md:text-sm lg:h-10 lg:text-base"
            href={siteConfig.links.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
      <Hero />
    </section>
  )
}
