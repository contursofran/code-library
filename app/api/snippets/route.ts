import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return new Response("Unauthorized", { status: 403 })
    }

    const snippetCount = await prisma.snippet.count({
      where: {
        authorId: user?.id,
      },
    })

    if (snippetCount >= 10) {
      return new Response("Snippets limit reached", { status: 402 })
    }

    const res = await req.json()

    const post = await prisma.snippet.create({
      data: {
        title: res.title,
        code: res.code,
        description: res.description,
        date: new Date().toISOString(),
        language: res.language,
        authorId: user?.id,
      },
    })

    return new Response(JSON.stringify(post))
  } catch (err) {
    return new Response(null, { status: 500 })
  }
}
