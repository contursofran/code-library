import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Notification, Notifications } from "@/lib/validations/notifications"

interface NotificationsState {
  notifications: Notifications
  addNotification: (notification: Notification) => void
  clearNotifications: () => void
}

export const useNotificationsStore = create(
  persist<NotificationsState>(
    (set, get) => ({
      notifications: [],
      addNotification: (notification: Notification) => {
        if (notification) {
          set((state) => ({
            notifications: [...state.notifications, notification],
          }))
        }
      },
      clearNotifications: () =>
        set((state) => ({
          notifications: [],
        })),
    }),
    {
      name: "notifications",
    }
  )
)
