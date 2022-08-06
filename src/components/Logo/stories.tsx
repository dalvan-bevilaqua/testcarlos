import { Story, Meta } from '@storybook/react/types-6-0'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => <Logo {...args} />

export const Symbol: Story = (args) => <Logo isSymbol size="small" {...args} />
