import { BrandAdobe, BrandReact, BrandTailwind } from "tabler-icons-react"

import { FeaturesCard } from "@/app/(landing)/components/FeaturesCard"

export default function Features({}) {
  return (
    <section className="container flex h-full flex-col justify-start gap-16  pt-6 pb-8 sm:gap-6 md:pt-10  md:pb-12 lg:pt-16 lg:pb-24">
      <div className="flex-col space-y-4">
        <div className="mx-auto flex flex-col items-start gap-4 ">
          <h1 className="text-2xl font-bold leading-[1.1] tracking-tighter dark:text-white sm:text-4xl md:text-5xl">
            Features
          </h1>
          <p className="max-w-[42rem] leading-normal dark:text-gray-300 sm:text-xl sm:leading-8">
            The goal of this project is to create a modern web app using Next.js
            13. These are some of the features that are planned.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        <FeaturesCard
          description="Lastest version of React."
          icon={
            <BrandReact
              className="h-[22px] w-[22px]"
              style={{ strokeWidth: "1.5" }}
            />
          }
          title={"React"}
        />
        <FeaturesCard
          description="App dir, api routes, etc."
          icon={
            <BrandAdobe
              className="h-[22px] w-[22px]"
              style={{ strokeWidth: "1.5" }}
            />
          }
          title={"Next.js 13"}
        />
        <FeaturesCard
          description="Components from Radix UI"
          icon={
            <BrandTailwind
              className="h-[22px] w-[22px]"
              style={{ strokeWidth: "1.5" }}
            />
          }
          title={"Tailwind"}
        />
        <FeaturesCard
          description="test"
          icon={
            <BrandAdobe
              className="h-[22px] w-[22px]"
              style={{ strokeWidth: "1.5" }}
            />
          }
          title={"Auth"}
        />
        <FeaturesCard
          description="test"
          icon={
            <BrandAdobe
              className="h-[22px] w-[22px]"
              style={{ strokeWidth: "1.5" }}
            />
          }
          title={"tRPC"}
        />
        <FeaturesCard
          description="test"
          icon={
            <BrandAdobe
              className="h-[22px] w-[22px]"
              style={{ strokeWidth: "1.5" }}
            />
          }
          title={"Prisma"}
        />
        <FeaturesCard
          description="test"
          icon={
            <BrandAdobe
              className="h-[22px] w-[22px]"
              style={{ strokeWidth: "1.5" }}
            />
          }
          title={"Prisma"}
        />
        <FeaturesCard
          description="test"
          icon={
            <BrandAdobe
              className="h-[22px] w-[22px]"
              style={{ strokeWidth: "1.5" }}
            />
          }
          title={"Prisma"}
        />
      </div>
    </section>
  )
}
