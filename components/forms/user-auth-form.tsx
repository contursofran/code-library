"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { BrandGithub, Loader2 } from "tabler-icons-react"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import { buttonVariants } from "@/components/ui/button"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })

  async function onSubmit(data: FormData) {
    setIsLoading(true)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <button
        className={cn(buttonVariants({ variant: "outline" }))}
        disabled={isLoading || isGitHubLoading}
        type="button"
        onClick={() => {
          setIsGitHubLoading(true)
          signIn("github")
        }}
      >
        {isGitHubLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <BrandGithub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </button>
    </div>
  )
}
