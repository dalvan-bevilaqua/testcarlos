import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => <Footer {...args} />
