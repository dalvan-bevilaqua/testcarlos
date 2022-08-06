import Pill from 'components/Pill'
import { FaBell } from 'react-icons/fa'

import * as S from './styles'

export const Notify = () => {
  const value = 1
  const handleClick = () => {
    console.log('click')
  }
  return (
    <S.Wrapper>
      <FaBell size={20} onClick={() => handleClick()} />
      {!!value && (
        <S.PillWrapper>
          <Pill size="small" value={value} />
        </S.PillWrapper>
      )}
    </S.Wrapper>
  )
}

export default Notify
