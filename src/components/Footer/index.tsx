import * as S from './styles'
import Waves from 'components/Waves'

export const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.WavesWrapper>
          <Waves color="gray" />
        </S.WavesWrapper>
        <S.Container size="medium">
          <span>examinaBem © 2022 Todos os direitos reservados.</span>
          <span>Mais Informações: contato@examinabem.com</span>
        </S.Container>
      </S.Footer>
    </>
  )
}

export default Footer
