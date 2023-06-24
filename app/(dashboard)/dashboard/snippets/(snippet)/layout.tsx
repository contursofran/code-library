import BackButton from "@/components/BackButton"

interface SnippetLayoutProps {
  children: React.ReactNode
}

export default async function SnippetLayout({ children }: SnippetLayoutProps) {
  return (
    <div className="container mt-8 flex w-full justify-between">
      <div className="flex w-full grow">
        <BackButton />
        <div className="mt-8 w-full">
          <div className="flex-col items-center justify-center">
            <div className="w-full flex-col justify-center">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
