import { z } from "zod"

import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"

const routeContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
})

export async function DELETE(
  req: Request, // this has to be present for the route to recieve params
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context)

    const user = await getCurrentUser()

    const count = await prisma.snippet.count({
      where: {
        id: params.id,
        authorId: user?.id,
      },
    })

    if (count > 0) {
      await prisma.snippet.delete({
        where: {
          id: params.id,
        },
      })
    }

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
