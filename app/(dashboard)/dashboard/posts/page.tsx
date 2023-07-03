import PostsCard from "@/components/dashboard/Postcard"
import { redirect } from "next/navigation"

const post = {
  title: "Post Title",
  description: "Post Description",
  date: "2021-10-10",
  href: "/dashboard/posts/1",
}

export default function PostsPage({}) {
  return (
    <div className="container mt-4 flex flex-col gap-2">
      <PostsCard {...post} />
    </div>
  )
}
