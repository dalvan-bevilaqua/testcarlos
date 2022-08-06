import Button from 'components/Button'
import Label from 'components/Label'
import Directory from 'icons/Directory'
import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import * as S from './styles'

export type CollapseProps = {
  color?: 'primary' | 'secondary' | 'tertiary' | 'gray' | 'white' | 'red'
  title: string
  children: string | number | React.ReactNode
}

export const Collapse = ({
  title,
  children,
  color = 'primary'
}: CollapseProps) => {
  const [open, setOpen] = useState(false)

  return (
    <S.Wrapper>
      <Button color="ghost" size="fit" isFull onClick={() => setOpen(!open)}>
        <S.Title isOpen={open} color={color}>
          <Label size="xlarge" color={open ? color : 'gray'} isBold>
            {title}
          </Label>
          {open ? <Directory /> : <CgMenu size={24} />}
        </S.Title>
      </Button>
      {open ? (
        typeof children === 'string' ? (
          <S.Text dangerouslySetInnerHTML={{ __html: children || '' }} />
        ) : (
          children
        )
      ) : null}
    </S.Wrapper>
  )
}

export default Collapse
