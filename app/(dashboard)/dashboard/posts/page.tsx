import Link from "next/link"

import { Button } from "@/components/ui/button"
import PostsCard from "@/components/dashboard/Postcard"
import Header from "@/components/Header"
import Shell from "@/components/Shell"
import HelloWorld from "@/app/hello.mdx"

const post = {
  title: "Post Title",
  description: "Post Description",
  date: "2021-10-10",
  href: "/dashboard/posts/1",
}

export default function PostsPage({}) {
  return <HelloWorld />
  //   <Shell>
  //     <Header
  //       description="Here you can create blog posts and link them to your snippets and
  //           vice versa."
  //       title="Posts"
  //     >
  //       <Link href={"/dashboard/post/editor"}>
  //         <Button size="sm">New Post</Button>
  //       </Link>
  //     </Header>
  //     <div className="container mt-4 flex flex-col gap-2">
  //       {/* <PostsCard {...post} />
  //        */}
  //        <

  //     </div>
  //   </Shell>
  // )
}