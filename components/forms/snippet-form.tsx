"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Snippet } from "@/types"
import { Loader2 } from "tabler-icons-react"

import { languages } from "@/lib/languages"
import { setNotifications } from "@/lib/notifications"
import { toast } from "@/hooks/use-toast"
import { useSnippetForm } from "@/hooks/useSnippetForm"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
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
import { DeleteSnippetButton } from "@/components/dashboard/delete-button"

interface SnippetFormProps {
  snippet?: Snippet
  action: "create" | "edit"
}

export function SnippetForm({ snippet, action }: SnippetFormProps) {
  const { form, handleSnippetCreation, handleSnippetEdition, isSubmitting } =
    useSnippetForm(snippet)
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const handleFunction =
    action === "create" ? handleSnippetCreation : handleSnippetEdition

  const handleSubmit = async () => {
    const res = await handleFunction()

    if (!res) {
      return toast({
        toastType: "failure",
        description: (
          <>
            An error occurred while {action === "edit" ? "editing" : "creating"}{" "}
            the snippet
          </>
        ),
      })
    } else {
      setNotifications([
        {
          id: Math.random().toString(),
          date: new Date().toISOString(),
          message: `Your snippet has been ${
            action === "edit" ? "edited" : "created"
          } successfully!`,
          type: "success",
        },
      ])

      return toast({
        toastType: "success",
        description: (
          <>
            Your snippet has been {action === "edit" ? "edited" : "created"}{" "}
            successfully!
          </>
        ),
      })
    }
  }

  useEffect(() => {
    if (
      form.formState.errors.code ||
      form.formState.errors.language ||
      form.formState.errors.description ||
      form.formState.errors.title
    ) {
      setShowDialog(true)
    }
  }, [form.formState.errors, form])

  return (
    <>
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              There was an error creating your snippet
            </AlertDialogTitle>
            <AlertDialogDescription>
              Please check the fields and try again.
              <ul className="mx-8 mt-3 space-y-1">
                {form.formState.errors.code && (
                  <li className="list-disc text-red-500">
                    {form.formState.errors.code.message}
                  </li>
                )}
                {form.formState.errors.language && (
                  <li className="list-disc text-red-500">
                    {form.formState.errors.language.message}
                  </li>
                )}
                {form.formState.errors.description && (
                  <li className="list-disc text-red-500">
                    {form.formState.errors.description.message}
                  </li>
                )}
                {form.formState.errors.title && (
                  <li className="list-disc text-red-500">
                    {form.formState.errors.title.message}
                  </li>
                )}
              </ul>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Form {...form}>
        <form
          className="mt-8 h-full space-y-2"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="flex h-full">
            <div className="mx-auto h-[calc(100vh-64px-64px-64px-80px-30px)] max-w-[750px] grow justify-center">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        autoFocus
                        className="h-[30px] border-none p-0 text-3xl font-medium leading-none tracking-tighter"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Textarea
                        aria-invalid="true"
                        className="resize-none overflow-hidden border-none px-0 text-lg text-gray-400"
                        maxLength={127}
                        {...form.register("description", {})}
                        placeholder="Add a description"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex h-full min-h-0 items-start justify-between rounded-md border p-4">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem className="h-full w-full">
                      <FormControl>
                        <Textarea
                          className="no-scrollbar h-full max-h-fit w-full resize-none border-none p-0 text-gray-300"
                          placeholder="Your code snippet"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem className="w-[100px]">
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="items-start justify-end gap-1 border-0 p-0 text-xs font-medium">
                            <SelectValue placeholder="Language" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <ScrollArea className="h-[300px]">
                            {languages.map((language) => (
                              <SelectItem
                                className="focus:bg-transparent focus:font-bold focus:text-primary"
                                key={language.value}
                                value={language.value}
                              >
                                {language.displayName}
                              </SelectItem>
                            ))}
                          </ScrollArea>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex h-[calc(100vh-64px-64px-64px)] w-24 shrink-0 items-end justify-end gap-2">
              {snippet && action === "edit" && (
                <Link href={`/dashboard/snippets/${snippet.id}`}>
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                </Link>
              )}
              <Button
                className="w-[72px]"
                disabled={isSubmitting}
                size="sm"
                type="submit"
              >
                {isSubmitting && (
                  <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                )}
                {action === "create" ? "Create" : "Save"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}
