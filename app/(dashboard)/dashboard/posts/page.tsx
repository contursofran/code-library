import Header from "@/components/Header"
import Shell from "@/components/Shell"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
      <div className="container flex flex-col gap-2">
        <div className="text-xl">Posts</div>
      </div>
    </Shell>
  )
}
