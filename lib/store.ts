import { create } from "zustand"
// interface NotificationsState {
//   notifications: Notifications
//   setNotification: (notifications: Notifications) => void
//   addNotification: (notification: Notification) => void
// }

// const useBearStore = create<NotificationsState>()((set) => ({
//   notifications: [],
//   setNotification: (notifications) => set(() => ({ notifications: notifications })),
//   addNotification: (notification) => set((state) => ({
//     notifications: state.notifications.push(notification)
//   }))
// }))

import { createJSONStorage, persist } from "zustand/middleware"

import { Notification, Notifications } from "@/lib/validations/notifications"

interface NotificationsState {
  notifications: Notifications
  addNotification: (notification: Notification) => void
}

export const useNotificationsStore = create(
  persist<NotificationsState>(
    (set, get) => ({
      notifications: [],
      addNotification: (notification: Notification) =>
        set((state) => ({
          notifications: [...state.notifications, notification],
        })),
    }),
    {
      name: "notifications",
    }
  )
)
