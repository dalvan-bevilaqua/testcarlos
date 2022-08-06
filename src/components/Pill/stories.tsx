import { Story, Meta } from '@storybook/react/types-6-0'
import Pill, { PillProps } from '.'

export default {
  title: 'Pill',
  component: Pill,
  args: {
    value: 8
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<PillProps> = (args) => <Pill {...args} />
