import Button from 'components/Button'
import Heading from 'components/Heading'
import Label from 'components/Label'
import * as S from './styles'

export type BlockProps = {
  color?: 'primary' | 'secondary'
  icon?: React.ReactNode
  secondIcon?: React.ReactNode
  title?: string
  subtitle?: string
  label?: string
  buttonText?: string
  onClick?: () => void
}

export const Block = ({
  title,
  subtitle,
  color = 'secondary',
  icon,
  secondIcon,
  label,
  buttonText = 'VER MAIS',
  onClick
}: BlockProps) => {
  return (
    <S.Wrapper>
      <S.FlexColumn>
        <S.TopContent>
          <S.Text>
            <Heading size="xmedium" color="gray">
              {title}
            </Heading>
            <Label color="dark" size="xmedium" isBold>
              {subtitle}
            </Label>
          </S.Text>
          <S.Icon>{icon}</S.Icon>
        </S.TopContent>
        <S.Actions>
          <S.LabelGroup>
            {secondIcon}
            <Label color="dark" size="xmedium" isBold>
              {label}
            </Label>
          </S.LabelGroup>
          <Button color={color} size="xmedium" isBold={false} onClick={onClick}>
            {buttonText}
          </Button>
        </S.Actions>
      </S.FlexColumn>
    </S.Wrapper>
  )
}

export default Block
