import * as S from './styles'

export type BallonProps = {
  color: 'primary' | 'secondary' | 'tertiary' | 'gray'
  icon: React.ReactNode
  title?: string
  subtitle?: string
  size?: 'small' | 'medium' | 'large'
  isDisabled?: boolean
}

export const Ballon = ({
  title,
  subtitle,
  color = 'primary',
  icon,
  size = 'medium',
  isDisabled = false
}: BallonProps) => {
  const colorTheme = isDisabled ? 'gray' : color
  return (
    <S.Wrapper isDisabled={isDisabled}>
      <S.Border>
        <S.Image color={colorTheme}>{icon}</S.Image>
      </S.Border>
      <S.Content>
        <S.Title color={colorTheme} size={size}>
          {title}
        </S.Title>
        {!!subtitle && (
          <S.SubTitle
            color={colorTheme}
            size={size}
            dangerouslySetInnerHTML={{ __html: subtitle || '' }}
          />
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default Ballon
