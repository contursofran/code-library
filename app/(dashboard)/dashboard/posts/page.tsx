import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PostCard } from "@/components/dashboard/post-card"
import { Header } from "@/components/header"
import { Shell } from "@/components/shell"

const post = {
  title: "Post Title",
  description: "Post Description",
  date: "2021-10-10",
  href: "/dashboard/posts/1",
}

export default function PostsPage({}) {
  return (
    <Shell>
      <Header
        description="Here you can create blog posts and link them to your snippets and
            vice versa."
        title="Posts"
      >
        <Link href={"/dashboard/post/editor"}>
          <Button size="sm">New Post</Button>
        </Link>
      </Header>
      <div className="flex h-full flex-1 items-center justify-center font-medium">
        Comming soon...
      </div>
      {/* <div className="container mt-4 flex flex-col gap-2">
        <PostCard {...post} />
        
      </div> */}
    </Shell>
  )
}
