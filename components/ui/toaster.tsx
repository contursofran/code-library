"use client"

import { Check, X } from "tabler-icons-react"

import { useToast } from "@/hooks/useToast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({
        action,
        description,
        id,
        title,
        toastType,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              <div>
                {toastType === "success" ? (
                  description && (
                    <ToastDescription>
                      {
                        <div className="flex items-center gap-1">
                          <Check className="mr-2 h-5 w-5 rounded-full p-1 dark:bg-white dark:text-background " />{" "}
                          <div className="h-full">{description}</div>
                        </div>
                      }
                    </ToastDescription>
                  )
                ) : (
                  <ToastDescription>
                    {
                      <div className="flex items-center gap-1">
                        <X className="mr-2 h-5 w-5 rounded-full p-1 dark:bg-white dark:text-background " />
                        <div className="h-full">{description}</div>
                      </div>
                    }
                  </ToastDescription>
                )}
                <div />
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
