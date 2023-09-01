import * as z from "zod"

import { Language, languages } from "@/lib/languages"

export const snippetSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    code: z.string(),
    language: z.string(),
    date: z.string(),
  })
)

export const snippetSchemaForm = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters." })
    .max(50),
  description: z
    .string()
    .max(200)
    .min(3, { message: "Description must be at least 3 characters." }),
  code: z.string().min(1, { message: "You must provide some code." }).max(5000),
  language: z
    .string()
    .min(1, { message: "You must select a language." })
    .refine((val) => languages.some((lang) => lang.value === val)),
  date: z.string().min(1).optional(),
})
