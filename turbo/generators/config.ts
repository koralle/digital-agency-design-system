import type { PlopTypes } from "@turbo/gen"
import { readdirSync } from "fs"
import { appendFile } from "node:fs/promises"
import { resolve } from "node:path"

const upperCase = (t: string) => t.charAt(0).toUpperCase() + t.slice(1)
const lowerCase = (t: string) => t.charAt(0).toLowerCase() + t.slice(1)
const camelCase = (t: string) => t.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
const dashCase = (t: string) => t.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())
const titleCase = (t: string) => t.replace(/[-_](\w)/g, (_, c) => " " + c.toUpperCase())
const descCase = (t: string) => t.replace(/[-_]/g, " ")
const validateDashCase = (i: string) => !/[A-Z]/.test(i) && !/_/.test(i)

const ui = readdirSync("./packages/ui").filter(
  (n) => !n.includes("."),
)

const updateComponentsPackage: PlopTypes.CustomActionFunction = async (answers) => {
  if (!answers) return ''

  if (!('packageName' in answers)) return ''

  const { packageName } = answers

  if (typeof packageName !== 'string') return ''

  await appendFile(
    resolve(__dirname, "../../packages/components/src/index.ts"),
    `export * from "./${dashCase(lowerCase(packageName))}"\n`
  )

  return ''
}

const updateComposablesPackage: PlopTypes.CustomActionFunction = async (answers) => {
  if (!answers) return ''

  if (!('packageName' in answers)) return ''

  const { packageName } = answers

  if (typeof packageName !== 'string') return ''

  await appendFile(
    resolve(__dirname, "../../packages/composables/src/index.ts"),
    `export * from "./${dashCase(lowerCase(packageName))}"\n`
  )

  return ''
}

const generator = (plop: PlopTypes.NodePlopAPI): void => {
  plop.setHelper("upperCase", (text) => upperCase(camelCase(text)))
  plop.setHelper("titleCase", (text) => upperCase(titleCase(text)))
  plop.setHelper("dashCase", (text) => dashCase(text))

  plop.setActionType("updateComponentsPackage", updateComponentsPackage)
  plop.setActionType("updateComposablesPackage", updateComposablesPackage)

  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "packageName",
        validate: (input: string) => {
          if (!input) return "component name is required."

          if (!validateDashCase(input))
            return `Please enter the component name in kebab case.`

          if (ui.includes(input)) return `${input} already exist.`

          return true
        }
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "./packages/components/src/{{dashCase packageName}}",
        templateFiles: "templates/component/**",
        base: "templates/component",
        abortOnFail: true
      },
      {
        type: "updateComponentsPackage",
      }
    ]
  })

  plop.setGenerator("composable", {
    description: "Create a new composable",
    prompts: [
      {
        type: "input",
        name: "packageName",
        validate: (input: string) => {
          if (!input) return "composable name is required."

          if (!validateDashCase(input))
            return `Please enter the composable name in kebab case.`

          if (ui.includes(input)) return `${input} already exist.`

          return true
        }
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "./packages/composables/src/{{dashCase packageName}}",
        templateFiles: "templates/composable/**",
        base: "templates/composable",
        abortOnFail: true
      },
      {
        type: "updateComposablesPackage",
      }
    ]
  })
  plop.setGenerator("package", {
    description: "Create a new package",
    prompts: [
      {
        type: "input",
        name: "packageName",
        validate: (input: string) => {
          if (!input) return "package name is required."

          if (!validateDashCase(input))
            return `Please enter the package name in kebab case.`

          if (ui.includes(input)) return `${input} already exist.`

          return true
        }
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "./packages/{{dashCase packageName}}",
        templateFiles: "templates/package/**",
        base: "templates/package",
        abortOnFail: true
      }
    ]
  })
}

export default generator
