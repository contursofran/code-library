"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "tabler-icons-react"

import { Button } from "@/components/ui/button"

interface CopyButtonProps {
  className?: string
  code: string
}

const copyToClipboard = (code: string) => {
  navigator.clipboard.writeText(code)
}

export default function CopyButton({ className, code }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <div className={className}>
      <Button
        size="sm"
        variant="outline"
        onClick={(event) => {
          event.stopPropagation()
          copyToClipboard(code)
          setHasCopied(true)
        }}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}
