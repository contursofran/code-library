import { siteFeatures } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Features({}) {
  return (
    <section className="container flex h-full flex-col justify-start gap-16  pb-8 pt-6 sm:gap-6 md:pb-12  md:pt-10 lg:pb-24 lg:pt-16">
      <div className="flex-col space-y-4">
        <div className="mx-auto flex flex-col items-center gap-4 text-center md:items-start md:text-start ">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tighter md:text-3xl lg:text-4xl xl:text-4xl">
            Features
          </h1>
          <p className="text-xl leading-normal text-muted-foreground sm:leading-8 md:text-lg xl:text-xl">
            The goal of this project is to create a modern web app using Next.js
            13. These are some of the features that are planned.
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {siteFeatures.map((feature) => (
          <Card className={cn("p-2")} key={feature.title}>
            <CardHeader>{feature.icon}</CardHeader>
            <CardContent className="space-y-2">
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription className="mt-2">{feature.body}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
