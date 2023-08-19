"use client"

import { useEffect, useState } from "react"

import { copyToClipboard } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface CopyButtonProps {
  buttonClassName?: string
  className?: string
  code: string
}

export function CopyButton({
  className,
  code,
  buttonClassName,
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <div className={className}>
      <Button
        className={buttonClassName}
        size="sm"
        variant={"outline"}
        onClick={(event) => {
          copyToClipboard(code, event)
          setHasCopied(true)
        }}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? (
          <Icons.check className="h-4 w-4" />
        ) : (
          <Icons.copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}
