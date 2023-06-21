import CreateSnippet from "@/app/(dashboard)/dashboard/components/CreateSnippet"

export default async function NewSnippetPage() {
  return (
    <div className="container h-[calc(100vh-65px)] flex-col items-center justify-center">
      <div className="mx-auto h-full w-full justify-center px-56 py-20">
        <div className="h-full w-full flex-col justify-center">
          <CreateSnippet />
        </div>
      </div>
    </div>
  )
}
