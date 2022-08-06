import Link from 'next/link'
import * as S from './styles'

export type CardProps = {
  color: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white' | 'linear' | 'normal'
  url?: string
  icon?: React.ReactNode
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  info?: string | React.ReactNode
  size?: 'small' | 'medium' | 'large'
  isDisabled?: boolean
}

export const Card = ({
  title,
  subtitle,
  info,
  color = 'primary',
  icon,
  url = '',
  size = 'medium',
  isDisabled = false
}: CardProps) => {
  const base = (
    <S.Wrapper isDisabled={isDisabled} color={color}>
      {!!icon && <S.Image color={color}>{icon}</S.Image>}
      <S.Content>
        <S.Title size={size}>{title}</S.Title>
        <S.SubTitle size={size}>{subtitle}</S.SubTitle>
        <S.Info size={size}>{info}</S.Info>
      </S.Content>
    </S.Wrapper>
  )

  return url && url !== '' ? (
    <Link href={isDisabled || !url ? '' : url}>{base}</Link>
  ) : (
    <>{base}</>
  )
}

export default Card
