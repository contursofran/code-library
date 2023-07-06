import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getCurrentUser } from "@/lib/session"
import Content from "@/components/dashboard/Content"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

interface SnippetsPageProps {
  params: {
    id: string
  }
  posts: any
}

export default async function SnippetsPage({
  params,
  posts,
}: SnippetsPageProps) {}
