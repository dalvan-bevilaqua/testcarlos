import Button from 'components/Button'
import Label from 'components/Label'
import Directory from 'icons/Directory'
import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import * as S from './styles'

export type DropItemProps = {
  title: string
  text: string
}

export const DropItem = ({ title, text }: DropItemProps) => {
  const [open, setOpen] = useState(false)
  return (
    <S.Wrapper>
      <Button color="ghost" size="fit" isFull onClick={() => setOpen(!open)}>
        <S.Title isOpen={open}>
          <Label size="xlarge" color={open ? 'secondary' : 'gray'} isBold>
            {title}
          </Label>
          {open ? <Directory /> : <CgMenu size={24} />}
        </S.Title>
      </Button>
      {open && <S.Text dangerouslySetInnerHTML={{ __html: text || '' }} />}
    </S.Wrapper>
  )
}

export default DropItem
