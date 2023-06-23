import SnippetForm from "@/app/(dashboard)/dashboard/snippets/components/SnippetForm"

export default async function NewSnippetPage() {
  return (
    <div className="flex-col items-center justify-center">
      <div className="w-full flex-col justify-center">
        <SnippetForm action="create" />
      </div>
    </div>
  )
}
