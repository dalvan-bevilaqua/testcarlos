import { Story, Meta } from '@storybook/react/types-6-0'
import Folder from 'icons/Folder'

import Block, { BlockProps } from '.'

export default {
  title: 'Block',
  component: Block,
  args: {
    title: 'Ácidos Graxos',
    subtitle: '6 ácidos graxos cadastrados',
    label: '356 VIEWS',
    icon: <Folder />,
    onClick: () => console.log('ok')
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: Story<BlockProps> = (args) => (
  <div style={{ margin: '5rem' }}>
    <Block {...args} />
  </div>
)
