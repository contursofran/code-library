import { env } from "@/env.mjs"
import { appRouter } from "@/server"
import { httpBatchLink, loggerLink } from "@trpc/client"

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
  ],
})
