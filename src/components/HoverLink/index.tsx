import * as S from './styles'

export type HoverLinkProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  color?: 'white' | 'default'
}

const HoverLink = ({
  children,
  size = 'small',
  color = 'default'
}: HoverLinkProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}

export default HoverLink
