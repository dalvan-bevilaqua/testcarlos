import * as S from './styles'

export type HeadingProps = {
  children: string | number | React.ReactNode
  size?: 'small' | 'medium' | 'xmedium' | 'large'
  color?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'gray'
}

export const Heading = ({
  children,
  color = 'primary',
  size = 'large'
}: HeadingProps) => {
  return (
    <S.H1 color={color} size={size}>
      {children}
    </S.H1>
  )
}

export default Heading
