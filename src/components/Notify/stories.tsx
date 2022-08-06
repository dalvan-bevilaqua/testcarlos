import { Story, Meta } from '@storybook/react/types-6-0'
import Notify from '.'

export default {
  title: 'Notify',
  component: Notify,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ margin: '50px' }}>
    <Notify {...args} />
  </div>
)
