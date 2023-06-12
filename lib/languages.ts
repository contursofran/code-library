export const languages = [
  { displayName: "C", value: "c" },
  { displayName: "C++", value: "cpp" },
  { displayName: "C#", value: "csharp" },
  { displayName: "CSS", value: "css" },
  { displayName: "HTML", value: "html" },
  { displayName: "Java", value: "java" },
  { displayName: "JavaScript", value: "javascript" },
  { displayName: "JSON", value: "json" },
  { displayName: "Markdown", value: "markdown" },
  { displayName: "PowerShell", value: "powershell" },
  { displayName: "Prisma", value: "prisma" },
  { displayName: "Python", value: "python" },
  { displayName: "Ruby", value: "ruby" },
  { displayName: "Rust", value: "rust" },
  { displayName: "SQL", value: "sql" },
  { displayName: "TypeScript", value: "typescript" },
] as const

export type Languages = typeof languages
export type Language = Languages[number]["value"]
