import { ComponentProps, HTMLProps, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface StickyProps {
  children: React.ReactNode
  className?: React.ComponentProps<"div">["className"] // adds support for Tailwind classes
  stickyClassName?: React.ComponentProps<"div">["className"]
  top?: number
}

function Sticky({ children, className, stickyClassName, top }: StickyProps) {
  const [isSticky, setIsSticky] = useState(false)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = stickyRef.current

      if (element) {
        const rect = element.getBoundingClientRect()
        const isSticky = rect.top === top
        setIsSticky(isSticky)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [top])

  return (
    <div
      className={cn(
        isSticky ? stickyClassName : className,
        "sticky top-16 dark:bg-dark-background"
      )}
      ref={stickyRef}
    >
      {children}
    </div>
  )
}

export { Sticky }
