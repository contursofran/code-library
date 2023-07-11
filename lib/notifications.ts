import {
  Notifications,
  notificationsSchema,
} from "@/lib/validations/notifications"

const localStorageKeys = {
  notification: "notification",
}

export const getNotifications = (): Notifications | null => {
  const notification = localStorage.getItem(localStorageKeys.notification)

  if (!notification) {
    return null
  }

  const validatedNotification = notificationsSchema.safeParse(
    JSON.parse(notification)
  )

  return validatedNotification.success ? validatedNotification.data : null
}

export const setNotifications = (notifications: Notifications): void => {
  localStorage.setItem(
    localStorageKeys.notification,
    JSON.stringify(notifications)
  )
}
