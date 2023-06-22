import CreateSnippet from "@/app/(dashboard)/dashboard/snippets/components/CreateSnippet"

export default async function NewSnippetPage() {
  return (
    <div className="container flex-col items-center justify-center">
      <div className="w-full flex-col justify-center">
        <CreateSnippet />
      </div>
    </div>
  )
}
