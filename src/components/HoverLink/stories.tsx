import React from 'react'
import { Story, Meta } from '@storybook/react'
import HoverLink from '.'

export default {
  title: 'HoverLink',
  argTypes: {
    children: {
      type: 'string'
    }
  },
  component: HoverLink
} as Meta

export const Default: Story = (args) => (
  <HoverLink {...args}>
    <a href="#">{args.children}</a>
  </HoverLink>
)
