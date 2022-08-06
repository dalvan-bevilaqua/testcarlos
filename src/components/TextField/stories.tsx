import { Story, Meta } from '@storybook/react/types-6-0'
import TextField from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const Error: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} error />
  </div>
)

export const Disabled: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} disabled />
  </div>
)

export const WithoutLabel: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} label="" />
  </div>
)
