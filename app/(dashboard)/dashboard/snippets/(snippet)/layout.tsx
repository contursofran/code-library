import BackButton from "@/components/back-button"

interface SnippetLayoutProps {
  children: React.ReactNode
}

export default async function SnippetLayout({ children }: SnippetLayoutProps) {
  return (
    <div className="container mt-8 flex w-full justify-between">
      <div className="flex w-full grow">
        <BackButton />
        <div className="w-full">
          <div className="h-full flex-col items-center justify-center">
            <div className="h-full w-full flex-col justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
