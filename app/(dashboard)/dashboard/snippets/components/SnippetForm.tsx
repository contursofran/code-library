"use client"

import { useEffect, useState } from "react"
import { Snippet } from "@prisma/client"
import { Loader2 } from "tabler-icons-react"
import { z } from "zod"

import { languages } from "@/lib/languages"
import { snippetSchemaForm } from "@/lib/validations/snippet"
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
import { useSnippetForm } from "@/app/(dashboard)/dashboard/snippets/hooks/useSnippetForm"

interface SnippetFormProps {
  snippet?: Snippet
}

export default function SnippetForm({ snippet }: SnippetFormProps) {
  const { form, handleSnippetCreation, isSubmitting } = useSnippetForm(snippet)
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const handleSubmit = async (data: z.infer<typeof snippetSchemaForm>) => {
    const res = await handleSnippetCreation()

    if (!res) {
      return toast({
        toastType: "failure",
        description: <>An error occurred while editing the snippet</>,
      })
    } else {
      return toast({
        toastType: "success",
        description: <>Your snippet has been created successfully!</>,
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
      console.log(form.formState.errors)
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
          className="h-96 space-y-2"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="flex">
            <div className="mx-auto max-w-[750px] grow justify-center">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        className=" border-none px-0 text-3xl font-medium"
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
                  <FormItem className="h-[75px] space-y-0">
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
              <div className="flex h-full items-start justify-between rounded-md border p-4">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem className="h-full w-full">
                      <FormControl>
                        <Textarea
                          className="no-scrollbar h-full w-full resize-none border-none p-0 text-gray-300"
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
            <div className="-mt-8 flex h-16 w-24 shrink-0 items-center justify-end">
              <Button
                className="w-full"
                disabled={isSubmitting}
                size="sm"
                type="submit"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Create
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}
