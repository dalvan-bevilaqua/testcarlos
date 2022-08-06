import { Story, Meta } from '@storybook/react/types-6-0'
import ComboBox, { ComboBoxProps } from '.'

const items = [
  {
    name: '5HTP',
    id: '5HTP'
  },
  {
    name: 'Acetilglucosamina',
    id: 'Acetilglucosamina'
  },
  {
    name: 'Acetiltirosina',
    id: 'Acetiltirosina'
  },
  {
    name: 'Sinapse Cerebral',
    id: 'Sinapse Cerebral'
  },
  {
    name: 'Aminoácidos',
    id: 'Aminoácidos'
  },
  {
    name: 'Enzimas',
    id: 'Enzimas'
  },
  {
    name: 'Fatores de Crescimento',
    id: 'Fatores de Crescimento'
  },
  {
    name: 'Fitoterápicos',
    id: 'Fitoterápicos'
  }
]

export default {
  title: 'ComboBox',
  component: ComboBox,
  args: {
    options: items
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ComboBoxProps> = (args) => (
  <div style={{ margin: '50px' }}>
    {' '}
    <ComboBox {...args} />
  </div>
)
