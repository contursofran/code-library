import { useState } from "react"
import { useRouter } from "next/navigation"
import { Snippet } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { snippetSchemaForm } from "@/lib/validations/snippet"

export function useSnippetForm(snippet?: Snippet) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const form = useForm<z.infer<typeof snippetSchemaForm>>({
    resolver: zodResolver(snippetSchemaForm),
    defaultValues: {
      title: "Undefined",
      description: snippet?.description ?? "",
      code: snippet?.code ?? "",
    },
  })

  const handleSnippetCreation = async () => {
    setIsSubmitting(true)

    const data = form.getValues()

    const response = await fetch("/api/snippets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const createdSnippet = await response.json()

    setIsSubmitting(false)

    if (response?.ok) {
      form.reset()
      router.push(`/dashboard/snippets/${createdSnippet.id}`)
    }

    return response.ok
  }

  return {
    form,
    handleSnippetCreation,
    isSubmitting,
  }
  // can't use handleSnippetCreation with toast because return tsx
}
