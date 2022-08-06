import * as S from './styles'

export type PillProps = {
  value: string | number
  size?: 'small' | 'medium'
}

export const Pill = ({ value, size = 'small' }: PillProps) => {
  return <S.Wrapper size={size}>{value}</S.Wrapper>
}

export default Pill
