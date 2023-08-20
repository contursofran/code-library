import { BackButton } from "@/components/back-button"

interface SnippetLayoutProps {
  children: React.ReactNode
}

export default async function SnippetLayout({ children }: SnippetLayoutProps) {
  return (
    <div className="container mt-8 flex flex-1 justify-between">
      <div className="flex flex-1 flex-col md:flex-row">
        <BackButton />
        <div className="flex flex-1 flex-col">{children}</div>
      </div>
    </div>
  )
}
