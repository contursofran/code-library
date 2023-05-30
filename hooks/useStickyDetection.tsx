import { useEffect, useRef, useState } from "react"

function useStickyDetection(top: number) {
  const [isSticky, setIsSticky] = useState(false)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = stickyRef.current

      if (element) {
        const rect = element.getBoundingClientRect()
        const isSticky = rect.top <= top

        setIsSticky(isSticky)
      }
    }

    window.addEventListener("scroll", handleScroll, true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [top])

  return { isSticky, stickyRef }
}

export { useStickyDetection }
