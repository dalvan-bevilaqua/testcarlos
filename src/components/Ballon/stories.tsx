import { Story, Meta } from '@storybook/react/types-6-0'
import { FaHeartbeat } from 'react-icons/fa'
import { GiPotionBall, GiChemicalDrop } from 'react-icons/gi'
import Ballon, { BallonProps } from '.'

export default {
  title: 'Ballon',
  component: Ballon,
  args: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const primaryProps = {
  title: 'formulações',
  color: 'primary',
  icon: <GiPotionBall />,
  subtitle: 'Acesse a nossa wiki com mais de <b>130 fórmulas</b>',
  url: '#'
}

const secondaryProps = {
  title: 'nutracêuticos',
  color: 'secondary',
  icon: <GiChemicalDrop />,
  subtitle: 'Hoje contamos um banco de <b>260 cadastros</b>',
  url: '#'
}

const tertiaryProps = {
  title: 'análise B',
  color: 'tertiary',
  icon: <FaHeartbeat />,
  subtitle: 'Experimente agora você têm direito a <b>5 análises</b>',
  url: '#'
}

export const Primary: Story<BallonProps> = (args) => (
  <Ballon {...primaryProps} {...args} />
)
export const Secondary: Story<BallonProps> = (args) => (
  <Ballon {...secondaryProps} {...args} />
)
export const Tertiary: Story<BallonProps> = (args) => (
  <Ballon {...tertiaryProps} {...args} />
)
