import { Story, Meta } from '@storybook/react/types-6-0'
import { FaHeartbeat } from 'react-icons/fa'
import { GiPotionBall, GiChemicalDrop } from 'react-icons/gi'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const primaryProps = {
  title: 'Nova Fórmula!',
  color: 'primary',
  icon: <GiPotionBall />,
  subtitle: 'Agora você pode ter acesso a tratamentos para regeneração neural',
  url: '#'
}

const secondaryProps = {
  title: 'Saiba mais sobre a Acetiltirosina',
  color: 'secondary',
  icon: <GiChemicalDrop />,
  subtitle: 'Agora você pode ter acesso a tratamentos para Acetiltirosina',
  url: '#'
}

const tertiaryProps = {
  title: 'Veja seu último exame.',
  color: 'tertiary',
  icon: <FaHeartbeat />,
  subtitle: 'Acesse o resultado da sua última análisefeita em 22 de maio',
  url: '#'
}

export const Default: Story<CardProps> = (args) => (
  <div style={{ display: 'grid', gridAutoFlow: 'columun', gridGap: '.9rem' }}>
    <Card {...primaryProps} {...args} />
    <Card {...secondaryProps} {...args} />
    <Card {...tertiaryProps} {...args} />
  </div>
)
