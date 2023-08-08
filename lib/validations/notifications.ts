import { z } from "zod"

const notificationSchema = z.object({
  id: z.string(),
  type: z.enum(["success", "error"]),
  message: z.string(),
  date: z.string(),
  snippet: z.string().optional(),
})

export const notificationsSchema = z.array(notificationSchema)

export type Notifications = z.infer<typeof notificationsSchema>

export type Notification = z.infer<typeof notificationSchema>
