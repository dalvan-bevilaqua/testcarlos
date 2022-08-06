import { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'
import Portal, { PortalProps } from '.'

export default {
  title: 'Portal',
  component: Portal,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<PortalProps> = () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <Portal isOpen={isOpen} setOpen={setOpen}>
      <div>Content</div>
    </Portal>
  )
}
