"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function PageHeader() {
  const pageName = usePathname()

  return (
    <>
      {pageName === "/dashboard/snippets" && <SnippetsPageHeader />}
      {pageName === "/dashboard/posts" && <PostsPageHeader />}
    </>
  )
}

function SnippetsPageHeader() {
  return (
    <div className="container flex w-full items-center justify-between pt-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">Snippets</h1>
          <div className="pt-1 text-muted-foreground">
            A place where you can store your code snippets
          </div>
        </div>
      </div>
      <Link href={"/dashboard/snippets/editor"}>
        <Button size="sm">New Snippet</Button>
      </Link>
    </div>
  )
}

function PostsPageHeader() {
  return (
    <div className="container flex w-full items-center justify-between pt-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium">Posts</h1>
          <div className="pt-1 text-muted-foreground">
            Here you can create blog posts and link them to your snippets and
            vice versa.
          </div>
        </div>
      </div>
    </div>
  )
}
