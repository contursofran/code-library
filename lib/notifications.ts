import {
  Notifications,
  notificationsSchema,
} from "@/lib/validations/notifications"

const localStorageKeys = {
  notifications: "notifications",
}

export const getNotifications = (): Notifications | null => {
  const notification = localStorage.getItem(localStorageKeys.notifications)

  if (!notification) {
    return null
  }

  const validatedNotification = notificationsSchema.safeParse(
    JSON.parse(notification)
  )
  console.log(validatedNotification)
  return validatedNotification.success ? validatedNotification.data : null
}

export const setNotifications = (notifications: Notifications): void => {
  localStorage.setItem(
    localStorageKeys.notifications,
    JSON.stringify(notifications)
  )
}
