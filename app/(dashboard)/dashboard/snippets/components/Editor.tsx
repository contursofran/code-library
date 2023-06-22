"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Snippet } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { DialogClose } from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"
import { Loader2 } from "tabler-icons-react"
import * as z from "zod"

import { languages } from "@/lib/languages"
import { snippetSchemaForm } from "@/lib/validations/snippet"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DeleteSnippetButton } from "@/app/(dashboard)/dashboard/snippets/(actions)/components/DeleteSnippet"

interface SnippetEditorButtonProps {
  action: "create" | "edit"
  snippet?: Snippet
}

export default function Editor({ action, snippet }: SnippetEditorButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof snippetSchemaForm>>({
    resolver: zodResolver(snippetSchemaForm),
    defaultValues: {
      title: snippet?.title ?? "",
      description: snippet?.description ?? "",
      code: snippet?.code ?? "",
    },
  })

  const handleSnippetCreation = async (
    values: z.infer<typeof snippetSchemaForm>
  ) => {
    setIsSubmitting(true)

    const data = {
      ...values,
    }

    const response = await fetch("/api/snippets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const createdSnippet = await response.json()

    setIsSubmitting(false)
    setIsDialogOpen(false)

    if (!response?.ok) {
      if (response.status === 402) {
        return toast({
          toastType: "failure",
          description: <>You have reached the maximum number of snippets</>,
        })
      }
      return toast({
        toastType: "failure",
        description: <>An error occurred while creating the snippet</>,
      })
    } else {
      form.reset()
      router.push(`/dashboard/snippets/${createdSnippet.id}`)
      return toast({
        toastType: "success",
        description: (
          <>
            Snippet <strong>{values.title}</strong> has been created
            successfully!
          </>
        ),
      })
    }
  }

  const handleSnippetEdition = async (
    snippetId: string,
    values: z.infer<typeof snippetSchemaForm>
  ) => {
    setIsSubmitting(true)

    const data = {
      ...values,
    }

    const response = await fetch(`/api/snippets/${snippetId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setIsSubmitting(false)
    setIsDialogOpen(false)

    if (!response?.ok) {
      return toast({
        toastType: "failure",
        description: <>An error occurred while editing the snippet</>,
      })
    } else {
      form.reset()
      router.refresh()
      return toast({
        toastType: "success",
        description: (
          <>
            Snippet <strong>{values.title}</strong> has been edited
            successfully!
          </>
        ),
      })
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="whitespace-nowrap" size="sm">
          {action === "edit" ? (
            <div className="flex items-center justify-between font-medium">
              Edit snippet
            </div>
          ) : (
            <div className="flex items-center justify-between gap-1">
              New snippet
            </div>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <div className="flex justify-between">
            <div>
              <DialogTitle>Snippet Editor</DialogTitle>
              <DialogDescription>
                Here you can create or edit your code snippets.
              </DialogDescription>
            </div>
            {action === "edit" && snippet && (
              <DeleteSnippetButton
                setIsDialogOpen={setIsDialogOpen}
                snippet={snippet}
              />
            )}
          </div>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(
              action === "edit" && snippet
                ? () =>
                    handleSnippetEdition(snippet.id, { ...form.getValues() })
                : handleSnippetCreation
            )}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Your title" {...field} />
                  </FormControl>
                  <FormDescription>
                    It must be between 2 and 50 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="Your description"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    It must be between 2 and 100 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-32 resize-none"
                      placeholder="Your code snippet"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Max 10000 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-8">
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>Language</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea className="h-[300px]">
                          {languages.map((language) => (
                            <SelectItem
                              key={language.value}
                              value={language.value}
                            >
                              {language.displayName}
                            </SelectItem>
                          ))}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The language of the code snippet.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({}) => (
                  <FormItem className="w-60 grow">
                    <FormLabel>Created at</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        className="pointer-events-none"
                        placeholder={"test"}
                        type="date"
                        value={new Date().toISOString().slice(0, 10)}
                      />
                    </FormControl>
                    <FormDescription>
                      The date when the snippet was created.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end pt-5">
              <div className="flex gap-5">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {action === "edit" ? "Save" : "Create"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
