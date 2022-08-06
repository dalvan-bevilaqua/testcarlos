import React from 'react'
import { Story, Meta } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading
} as Meta

export const Default: Story = (args) => <Loading {...args} />
