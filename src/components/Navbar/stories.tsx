import { Story, Meta } from '@storybook/react/types-6-0'
import Navbar from '.'

export default {
  title: 'Navbar',
  component: Navbar,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ margin: '50px' }}>
    <Navbar {...args} />
  </div>
)
