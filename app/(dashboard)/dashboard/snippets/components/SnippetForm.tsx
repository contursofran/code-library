"use client"

import { Snippet } from "@prisma/client"
import { Loader2 } from "tabler-icons-react"
import { z } from "zod"

import { languages } from "@/lib/languages"
import { snippetSchemaForm } from "@/lib/validations/snippet"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
import { useSnippetForm } from "@/app/(dashboard)/dashboard/snippets/hooks/useSnippetForm"

interface SnippetFormProps {
  snippet?: Snippet
}

export default function SnippetForm({ snippet }: SnippetFormProps) {
  const { form, handleSnippetCreation, isSubmitting } = useSnippetForm(snippet)

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

  return (
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

                  <FormMessage />
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
                      className="resize-none overflow-hidden border-none px-0 text-lg text-gray-400"
                      maxLength={127}
                      {...field}
                      placeholder="Add a description"
                    />
                  </FormControl>
                  <FormMessage />
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
                    <FormMessage />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex w-24 shrink-0 justify-end">
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
  )
}
