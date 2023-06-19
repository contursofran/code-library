import { z } from "zod"

import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import { snippetSchema, snippetSchemaForm } from "@/lib/validations/snippet"

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

    const userHasSnippet = await verifyUserHasSnippet(params.id)

    if (userHasSnippet) {
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

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context)

    if (!(await verifyUserHasSnippet(params.id))) {
      return new Response(null, { status: 403 })
    }

    const json = await req.json()

    const body = snippetSchemaForm.parse(json)

    await prisma.snippet.update({
      where: {
        id: params.id,
      },
      data: {
        code: body.code,
        language: body.language,
        title: body.title,
        description: body.description,
      },
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

const verifyUserHasSnippet = async (snippetId: string) => {
  const user = await getCurrentUser()

  const count = await prisma.snippet.count({
    where: {
      id: snippetId,
      authorId: user?.id,
    },
  })

  return count > 0
}
