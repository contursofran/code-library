import { FeaturesCard } from "@/components/features-card"
import { Icons } from "@/components/icons"

export default function Features({}) {
  return (
    <section className="container flex h-full flex-col justify-start gap-16  pb-8 pt-6 sm:gap-6 md:pb-12  md:pt-10 lg:pb-24 lg:pt-16">
      <div className="flex-col space-y-4">
        <div className="mx-auto flex flex-col items-start gap-4 ">
          <h1 className="text-2xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl">
            Features
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            The goal of this project is to create a modern web app using Next.js
            13. These are some of the features that are planned.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 "></div>
    </section>
  )
}
