/** @type {import('prettier').Config} */

const tailwindPlugin = require("prettier-plugin-tailwindcss")
const importsPlugin = require("@ianvs/prettier-plugin-sort-imports")

const plugins = [
  {
    parsers: {
      typescript: {
        ...tailwindPlugin.parsers.typescript,
        preprocess: importsPlugin.parsers.typescript.preprocess,
      },
    },
    options: {
      ...tailwindPlugin.options,
      ...importsPlugin.options,
    },
  },
]

module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  plugins,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
}
