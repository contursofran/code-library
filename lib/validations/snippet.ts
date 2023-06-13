import * as z from "zod"

import { Language, languages } from "@/lib/languages"

export const snippetSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters." })
    .max(50),
  description: z.string().max(200).optional(),
  code: z.string().min(1, { message: "You must provide some code." }).max(1000),
  language: z
    .string()
    .min(1, { message: "Please select a language." })
    .refine((val) => languages.some((lang) => lang.value === val)),
  createdAt: z.string().min(1).optional(),
})
