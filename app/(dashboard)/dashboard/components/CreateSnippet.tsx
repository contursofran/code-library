"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { languages } from "@/lib/languages"
import { snippetSchemaForm } from "@/lib/validations/snippet"
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

export default function CreateSnippet() {
  const form = useForm<z.infer<typeof snippetSchemaForm>>({
    resolver: zodResolver(snippetSchemaForm),
    defaultValues: {
      title: "Untitled",
    },
  })

  return (
    <Form {...form}>
      <form className="h-[calc(100%-88px-48px)] space-y-2">
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
                    className="no-scrollbar h-full w-full resize-none border-none text-gray-300"
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
                        <SelectItem key={language.value} value={language.value}>
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
      </form>
    </Form>
  )
}
