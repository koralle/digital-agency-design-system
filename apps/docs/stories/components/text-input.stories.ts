import { Meta, StoryObj } from "@storybook/vue3"
import { TextInput } from "@koralle/ui"

const meta = {
  title: "Components / TextInput",
  component: TextInput,
}  satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
