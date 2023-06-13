"use client"

import { Snippet } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { languages } from "@/lib/languages"
import { snippetSchema } from "@/lib/validations/snippet"
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

interface SnippetEditorButtonProps {
  action: "create" | "edit"
  snippet?: Snippet
}

export default function Editor({ action, snippet }: SnippetEditorButtonProps) {
  const form = useForm<z.infer<typeof snippetSchema>>({
    resolver: zodResolver(snippetSchema),
    defaultValues: {
      title: snippet?.content.title ?? "",
      description: snippet?.content.description ?? "",
      code: snippet?.content.code ?? "",
    },
  })

  const onSubmit = (values: z.infer<typeof snippetSchema>) => {
    const createdAt = new Date().toISOString()

    const data = {
      ...values,
      createdAt,
    }

    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          {action === "edit" ? (
            <div className="flex items-center justify-between">Edit</div>
          ) : (
            <div className="flex items-center justify-between gap-1">
              New snippet
            </div>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Snippet Editor</DialogTitle>
          <DialogDescription>
            Here you can create or edit your code snippets.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
                name="createdAt"
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
            <div className="flex justify-end">
              <Button type="submit">
                {action === "edit" ? "Save" : "Create"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
