import { redirect } from "next/navigation"
import { publicProcedure, router } from "@/server/trpc"
import { z } from "zod"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"

export const appRouter = router({
  getSnippets: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async (opts) => {
      const { id } = opts.input
      const snippets = await prisma.snippet.findMany({
        select: {
          id: true,
          title: true,
          code: true,
          description: true,
          date: true,
          language: true,
        },
        where: {
          authorId: id,
        },
      })

      return snippets
    }),
  getSnippet: publicProcedure.query(async (opts) => {
    const asd = {
      id: "test",
    }

    return asd
  }),
})

export type AppRouter = typeof appRouter
