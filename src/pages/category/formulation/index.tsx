import Ballon from 'components/Ballon'
import { Content } from 'components/Ballon/styles'
import Block from 'components/Block'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Heading from 'components/Heading'
import Label from 'components/Label'
import Loading from 'components/Loading'
import { useNavigation } from 'hooks/use-navigation'
import { useRequestDisease } from 'hooks/use-request'
import Eye from 'icons/Eye'
import Folder from 'icons/Folder'
import Chemical from 'icons/Chemical'
import { CONST_ROUTES } from 'constants/routes'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import * as S from './styles'
import Button from 'components/Button'

type FormulationResposeProps = {
  id: string
  name: string
  sumPrescription: number
  view: number
}

const route = CONST_ROUTES.Formulation

const FormulationCategory = () => {
  const [session] = useSession()
  const [searching, setSearching] = useState<boolean>()
  const [selectedLetter, setSelectedLetter] = useState<string>()
  const [items, setItems] = useState<FormulationResposeProps[]>([])

  const { setPageId, setCategorySum, setCategoryName } = useNavigation()

  const routes = useRouter()
  const { push } = routes
  const arrayList = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'X',
    'W',
    'Y',
    'Z'
  ]

  const handleClick = (item: FormulationResposeProps) => {
    if (item.id) {
      setPageId(item.id)
      setCategorySum(item?.sumPrescription || 0)
      setCategoryName(item.name)
      push(route.path)
    }
  }

  const handleLetterFilterClick = (letter: string) => {
    setSelectedLetter(letter)
    GetFilteringByLetter(letter, session?.user?.jwt)
  }

  useEffect(() => {
    if (!session) {
      push('/login')
    }
  }, [session, push])

  useEffect(() => {
    handleLetterFilterClick(arrayList[0])
  }, [])

  async function GetFilteringByLetter(letter: string, jwt = '') {
    const url = `/disease/get-by-start-with/${letter}`
    setSearching(true)

    const data = await useRequestDisease(url, jwt)

    !!data && setItems(data)

    setSearching(false)
  }

  if (!session?.user?.jwt) {
    return null
  }

  return (
    <S.Wrapper>
      <Header />
      <Container size="medium">
        <Content>
          <S.Title>
            <Ballon
              size="large"
              title={route.pluralName.toLowerCase()}
              color="primary"
              icon={<Chemical />}
            />
          </S.Title>
          <S.Subtitle>
            <Heading color="primary" size="small">
              {'Índice de Doenças e Comorbidades'}
            </Heading>
            <Label color="gray" size="small">
              <span>
                <b>Clique na letra</b> correspondente à doença ou comorbidade
                que deseja listar
              </span>
            </Label>
          </S.Subtitle>
          <S.Index>
            {arrayList.map((letter, index) => {
              return (
                <Button
                  key={index}
                  size="fit"
                  color="ghost"
                  onClick={() => handleLetterFilterClick(letter)}
                >
                  <S.IndexItem>{letter}</S.IndexItem>
                  <S.IndexItemS
                    key={index}
                    selected={letter == selectedLetter}
                  ></S.IndexItemS>
                </Button>
              )
            })}
          </S.Index>
          <S.Subtitle>
            <div>
              <Label color="primary" size="small">
                {'Exibindo todos os resultados com a '}
              </Label>
              <Label isBold color="primary" size="small">
                {'letra '}
                {selectedLetter}
              </Label>
            </div>
          </S.Subtitle>
          {items?.length ? (
            <S.ItemList>
              {items.map((item, index) => {
                return (
                  <Block
                    key={index}
                    color="primary"
                    title={item.name}
                    icon={<Folder />}
                    secondIcon={<Eye />}
                    subtitle={`${item?.sumPrescription ?? 0}  cadastrados`}
                    label={`${item.view} VIEWS`}
                    onClick={() => handleClick(item)}
                  />
                )
              })}
            </S.ItemList>
          ) : searching ? (
            <S.LoadingWrapper>
              <Loading />
            </S.LoadingWrapper>
          ) : (
            <S.LoadingWrapper>
              <Label color="primary" size="large">
                {
                  'Não encontramos nenhuma doença que inicie com a letra selecionada'
                }
              </Label>
            </S.LoadingWrapper>
          )}
        </Content>
      </Container>
      <Footer />
    </S.Wrapper>
  )
}

export default FormulationCategory
