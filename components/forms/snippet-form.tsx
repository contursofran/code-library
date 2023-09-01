"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Snippet } from "@/types"
import { useStore } from "zustand"

import { languages } from "@/lib/languages"
import { useNotificationsStore } from "@/lib/store"
import { useSnippetForm } from "@/hooks/useSnippetForm"
import { toast } from "@/hooks/useToast"
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
import { Icons } from "@/components/icons"

interface SnippetFormProps {
  snippet?: Snippet
  action: "create" | "edit"
}

export function SnippetForm({ snippet, action }: SnippetFormProps) {
  const { form, handleSnippetCreation, handleSnippetEdition, isSubmitting } =
    useSnippetForm(snippet)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const addNotification = useStore(
    useNotificationsStore,
    (state) => state.addNotification
  )

  const handleFunction =
    action === "create" ? handleSnippetCreation : handleSnippetEdition

  const handleSubmit = async (title: string) => {
    const res = await handleFunction()

    if (!res) {
      addNotification({
        id: Math.random().toString(),
        date: new Date().toISOString(),
        message: `had an error while ${
          action === "edit" ? "edited" : "created"
        }, please try again later`,
        type: "failure",
        snippet: title,
      })

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
      addNotification({
        id: Math.random().toString(),
        date: new Date().toISOString(),
        message: `has been ${action === "edit" ? "edited" : "created"}`,
        type: "success",
        snippet: title,
      })

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
                {form.formState.errors.title && (
                  <li className="list-disc text-red-500">
                    {form.formState.errors.title.message}
                  </li>
                )}
                {form.formState.errors.description && (
                  <li className="list-disc text-red-500">
                    {form.formState.errors.description.message}
                  </li>
                )}
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
          className="mr-0 mt-8 flex flex-1 justify-start space-y-2 md:mr-24 md:mt-[72px] md:justify-center"
          onSubmit={form.handleSubmit(() =>
            handleSubmit(form.getValues().title)
          )}
        >
          <div className="flex max-w-[750px] flex-1 flex-col">
            <div className="flex w-full  flex-1 flex-col">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        autoFocus
                        className="h-[30px] border-none p-0 text-3xl font-medium leading-none tracking-tighter focus-visible:ring-0"
                        placeholder="Add a title"
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
                        className="resize-none overflow-hidden border-none px-0 text-lg focus-visible:ring-0"
                        maxLength={127}
                        {...form.register("description", {})}
                        placeholder="Add a description"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-1 items-start justify-between rounded-md border p-4">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem
                      className="flex h-full flex-1"
                      id="text-area-parent-0"
                    >
                      <FormControl
                        className="flex flex-1"
                        id="text-area-parent"
                      >
                        <Textarea
                          className="no-scrollbar flex flex-1 resize-none border-none p-0 focus-visible:ring-0 focus-visible:ring-background"
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
                      <Select
                        defaultValue={snippet?.language}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="items-start justify-end gap-1 border-0 p-0 text-xs font-medium focus:ring-0 focus:ring-background">
                            <SelectValue placeholder="Language" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <ScrollArea className="h-[250px]">
                            {languages.map((language) => (
                              <SelectItem
                                className="pl-2 focus:bg-transparent focus:font-bold focus:text-primary focus:ring-0 focus:ring-background"
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
            <div className="flex h-fit w-full items-end justify-end">
              <div className="mt-12 flex h-fit justify-between gap-4">
                {snippet && action === "edit" && (
                  <Link href={`/dashboard/snippets/${snippet.id}`}>
                    <Button size="sm" variant="outline">
                      Cancel
                    </Button>
                  </Link>
                )}
                <Button
                  className="w-[100px]"
                  disabled={isSubmitting}
                  size="sm"
                  type="submit"
                >
                  {isSubmitting && (
                    <Icons.spinner className="mr-1 h-4 w-4 animate-spin" />
                  )}
                  {action === "create" ? "Create" : "Save"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}
