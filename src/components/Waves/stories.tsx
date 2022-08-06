import { Story, Meta } from '@storybook/react/types-6-0'
import Waves from '.'

export default {
  title: 'Waves',
  component: Waves,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ position: 'relative', width: '100%', height: '400px' }}>
    <Waves {...args} />
  </div>
)
