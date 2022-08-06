import { Story, Meta } from '@storybook/react/types-6-0'
import Header from '.'

export default {
  title: 'Header',
  component: Header,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => <Header {...args} />
