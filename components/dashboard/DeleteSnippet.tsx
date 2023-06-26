"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { useRouter } from "next/navigation"
import { Snippet } from "@prisma/client"
import { Loader2, Trash } from "tabler-icons-react"

import { toast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface DeleteSnippetButtonProps {
  snippet: Pick<Snippet, "id">
}

async function deleteSnippet(snippetId: string) {
  const res = await fetch(`/api/snippets/${snippetId}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    toast({
      description: "Something went wrong. Please try again.",
      toastType: "failure",
    })
  }

  return res.ok
}

export function DeleteSnippetButton({ snippet }: DeleteSnippetButtonProps) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const router = useRouter()

  const handleDeletion = async () => {
    setIsDeleting(true)
    const deleted = await deleteSnippet(snippet.id)

    if (deleted) {
      toast({
        description: "Snippet deleted.",
        toastType: "success",
      })

      router.push("/dashboard")
    }

    setIsDeleting(false)
    setIsOpen(false)
  }

  return (
    <AlertDialog defaultOpen={false} open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="destructive">
          <Trash className="flex h-4 w-4 items-center" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this snippet?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-white hover:bg-red-600 dark:bg-red-500 dark:text-white dark:hover:bg-red-600 dark:hover:text-white"
            onClick={(event) => {
              event.preventDefault()
              handleDeletion()
            }}
          >
            {isDeleting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Trash className="mr-1 flex h-4 w-4 items-center" />
            )}
            <span>Delete</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
