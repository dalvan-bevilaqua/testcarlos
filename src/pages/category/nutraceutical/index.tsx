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
import { useRequestNutraceutic } from 'hooks/use-request'
import Eye from 'icons/Eye'
import Folder from 'icons/Folder'
import Potion from 'icons/Potion'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { CONST_ROUTES } from 'constants/routes'

import * as S from './styles'

export type NutraceuticalProps = {
  slug: string
}

type NutraceuticalResposeProps = {
  id: string
  name: string
  sum: number
  view: number
}

const route = CONST_ROUTES.Nutraceutical

const NutraceuticalCategory = ({ slug }: NutraceuticalProps) => {
  const [session] = useSession()
  const [items, setItems] = useState<NutraceuticalResposeProps[]>([])

  const { setPageId, setCategorySum, setCategoryName } = useNavigation()

  const title = 'Nutracêuticos por Categoria'
  const label = 'Exbindo todos os resultados dos Nutracêuticos'

  const routes = useRouter()
  const { push } = routes

  useEffect(() => {
    if (!session) {
      push('/login')
    }

    async function GetNutraceuticalCategory(jwt = '') {
      const url = '/nutraceutical-category/get'
      const data = await useRequestNutraceutic(url, jwt)
      !!data && setItems(data)
    }

    !!session?.user?.jwt && GetNutraceuticalCategory(session?.user?.jwt)
  }, [session, slug, push])

  const handleClick = (item: NutraceuticalResposeProps) => {
    if (item.id) {
      setPageId(item.id)
      setCategorySum(item?.sum || 0)
      setCategoryName(item.name)
      push(route.path)
    }
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
              title="nutracêuticos"
              color="secondary"
              icon={<Potion />}
            />
          </S.Title>
          <S.Subtitle>
            <Heading color="secondary" size="small">
              {title}
            </Heading>
            <Label color="gray" size="small">
              {label}
            </Label>
          </S.Subtitle>
          {items?.length ? (
            <S.ItemList>
              {items.map((item, index) => {
                return (
                  <Block
                    key={index}
                    title={item.name}
                    icon={<Folder />}
                    secondIcon={<Eye />}
                    subtitle={`${item.sum}  cadastrados`}
                    label={`${item.view} VIEWS`}
                    onClick={() => handleClick(item)}
                  />
                )
              })}
            </S.ItemList>
          ) : (
            <S.LoadingWrapper>
              <Loading />
            </S.LoadingWrapper>
          )}
        </Content>
      </Container>
      <Footer />
    </S.Wrapper>
  )
}

export default NutraceuticalCategory
