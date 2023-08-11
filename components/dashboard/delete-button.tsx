"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Snippet } from "@/types"
import { Loader2, Trash } from "tabler-icons-react"
import { useStore } from "zustand"

import { useNotificationsStore } from "@/lib/store"
import { toast } from "@/hooks/useToast"
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
  snippet: Snippet
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
  const addNotification = useStore(
    useNotificationsStore,
    (state) => state.addNotification
  )

  const router = useRouter()

  const handleDeletion = async () => {
    setIsDeleting(true)
    const deleted = await deleteSnippet(snippet.id)

    if (deleted) {
      addNotification({
        id: Math.random().toString(),
        date: new Date().toISOString(),
        snippet: snippet.title,
        message: "has been deleted successfully.",
        type: "success",
      })

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
        <Button className="shrink-0" size="icon" variant="outline">
          <Trash className="h-4 w-4" />
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
            className="bg-primary"
            onClick={(event) => {
              event.preventDefault()
              handleDeletion()
            }}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <span>Delete</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
