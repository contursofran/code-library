import { Snippet } from "@/types"
import { Code } from "bright"
import tokyoNightTheme from "public/tokyo-night-theme.json"

import { ScrollArea } from "@/components/ui/scroll-area"

interface SnippetContentProps {
  snippet: Snippet
}

export default function SnippetContent({ snippet }: SnippetContentProps) {
  const code = `${snippet.content.code}`

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="text-2xl font-medium">{snippet.content.title}</div>
      <div className="text-lg dark:text-gray-500">
        {snippet.content.description}
      </div>
      <div>
        <ScrollArea className="mt-4 h-full w-[800px] rounded-md border">
          {/* @ts-expect-error
        <Code
        className="w-[800px] p-3 text-sm"
        lang="json"
        theme={tokyoNightTheme}
        >
        {code}
      </Code> */}
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the kings pillow, in his soup,
          even in the royal toilet. The king was furious, but he couldnt seem to
          stop Jokester. And then, one day, the people of the kingdom discovered
          that the jokes left by Jokester were so funny that they couldnt help
          but laugh. And once they started laughing, they couldnt stop. Jokester
          began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the kings pillow, in his soup, even in
          the royal toilet. The king was furious, but he couldnt seem to stop
          Jokester. And then, one day, the people of the kingdom discovered that
          the jokes left by Jokester were so funny that they couldnt help but
          laugh. And once they started laughing, they couldnt stop. Jokester
          began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the kings pillow, in his soup, even in
          the royal toilet. The king was furious, but he couldnt seem to stop
          Jokester. And then, one day, the people of the kingdom discovered that
          the jokes left by Jokester were so funny that they couldnt help but
          laugh. And once they started laughing, they couldnt stop. Jokester
          began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the kings pillow, in his soup, even in
          the royal toilet. The king was furious, but he couldnt seem to stop
          Jokester. And then, one day, the people of the kingdom discovered that
          the jokes left by Jokester were so funny that they couldnt help but
          laugh. And once they started laughing, they couldnt stop. Jokester
          began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the kings pillow, in his soup, even in
          the royal toilet. The king was furious, but he couldnt seem to stop
          Jokester. And then, one day, the people of the kingdom discovered that
          the jokes left by Jokester were so funny that they couldnt help but
          laugh. And once they started laughing, they couldnt stop. Jokester
          began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the kings pillow, in his soup, even in
          the royal toilet. The king was furious, but he couldnt seem to stop
          Jokester. And then, one day, the people of the kingdom discovered that
          the jokes left by Jokester were so funny that they couldnt help but
          laugh. And once they started laughing, they couldnt stop. Jokester
          began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the kings pillow, in his soup, even in
          the royal toilet. The king was furious, but he couldnt seem to stop
          Jokester. And then, one day, the people of the kingdom discovered that
          the jokes left by Jokester were so funny that they couldnt help but
          laugh. And once they started laughing, they couldnt stop. Jokester
          began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the kings pillow, in his soup, even in
          the royal toilet. The king was furious, but he couldnt seem to stop
          Jokester. And then, one day, the people of the kingdom discovered that
          the jokes left by Jokester were so funny that they couldnt help but
          laugh. And once they started laughing, they couldnt stop.
        </ScrollArea>
      </div>
    </div>
  )
}
