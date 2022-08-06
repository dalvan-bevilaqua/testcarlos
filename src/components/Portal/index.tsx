import Button from 'components/Button'
import { IoMdClose } from 'react-icons/io'
import * as S from './styles'

export type PortalProps = {
  children: string | number | React.ReactNode
  isOpen?: boolean
  setOpen: (bol: boolean) => void
}

export const Portal = ({ children, isOpen = false, setOpen }: PortalProps) => {
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Head>
        <Button size="fit" color="ghost" onClick={() => setOpen(false)}>
          <IoMdClose size={30} />
        </Button>
      </S.Head>
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  )
}

export default Portal
