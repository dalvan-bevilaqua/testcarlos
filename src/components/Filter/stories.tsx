import { Story, Meta } from '@storybook/react/types-6-0'
import Filter, { FilterProps } from '.'

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
  title: 'Filter',
  component: Filter,
  args: {
    items: items,
    onSelect: (id: string) => console.log(id)
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<FilterProps> = (args) => (
  <div style={{ margin: '50px' }}>
    <Filter {...args} />
  </div>
)
