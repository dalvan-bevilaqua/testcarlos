import * as S from './styles'

export type LabelProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'gray'
    | 'white'
    | 'dark'
    | 'darkest'
    | 'red'
  children: string | React.ReactNode
  size?: 'small' | 'xmedium' | 'medium' | 'large' | 'xlarge'
  isBold?: boolean
}

const Label = ({
  color = 'primary',
  size = 'medium',
  children,
  isBold = false
}: LabelProps) => {
  return (
    <S.Label color={color} size={size} isBold={isBold}>
      {children}
    </S.Label>
  )
}

export default Label
