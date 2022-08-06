import { Story, Meta } from '@storybook/react/types-6-0'
import Collapse, { CollapseProps } from '.'

export default {
  title: 'DropItem',
  component: Collapse,
  args: {
    title: 'Farmacologia',
    text: `O 5-HTP é um aminoácido essencial para o funcionamento do organismo sendo muito utilizado pelo cérebro, que
    juntamente com o NADH, B6 (piridoxina) e magnésio produzem a serotonina e a melatonina, neurotransmissores
    importantes nos processos bioquímicos que regulam as sensações de bem estar e sono. No organismo,
    o 5-OH-triptofano pode ser sintetizado através de outro aminoácido, a L-serina.`
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<CollapseProps> = (args) => (
  <div style={{ margin: '50px' }}>
    <Collapse {...args} />
  </div>
)
