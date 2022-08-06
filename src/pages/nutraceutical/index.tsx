import { useEffect, useState } from 'react'
import { useNavigation } from 'hooks/use-navigation'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Loading from 'components/Loading'

import * as S from './styles'
import Ballon from 'components/Ballon'
import Potion from 'icons/Potion'
import Label from 'components/Label'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Filter from 'components/Filter'

import { useSession } from 'next-auth/client'
import DropItem from 'components/DropItem'

import { getTitleByProperty } from './helpers'
import Info from 'icons/Info'
import { useRequestNutraceutic } from 'hooks/use-request'

const Nutraceutical = () => {
  const { pageId, categorySum, categoryName } = useNavigation()
  const [loading, setLoading] = useState(false)
  const [loadingItem, setLoadingItem] = useState(true)
  const [data, setData] = useState([])
  const [item, setItem] = useState()
  const [session] = useSession()

  const routes = useRouter()
  const { push } = routes

  //Visualiza o nuraceutico e atualiza a vizualização
  async function GetById(id: string | number) {
    const url = `/nutraceutical/get/${id}`
    const jwt = session?.user.jwt || ''
    setLoadingItem(true)
    const data = await useRequestNutraceutic(url, jwt)
    !!data && setItem(data)

    setLoadingItem(false)
  }

  async function GetByCategoryId(id: string) {
    const url = `/nutraceutical/get-by-categoryid-update/${id}`
    const jwt = session?.user.jwt || ''
    setLoading(true)
    const data = await useRequestNutraceutic(url, jwt)
    setData(data)
    !!data[0]?.id && GetById(data[0]?.id)
    setLoading(false)
  }

  useEffect(() => {
    if (!session?.user?.jwt) {
      push('/login')
    } else if (pageId === '') {
      push('/category/nutraceutical')
    } else {
      GetByCategoryId(pageId)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId])

  const handleSelect = async (id: string | number) => {
    if (id) {
      GetById(id)
    }
  }

  if (!session?.user?.jwt || pageId === '') {
    return null
  }
  return (
    <S.Wrapper>
      <Header />
      <Container size="medium">
        <S.Content>
          {loading ? (
            <Loading />
          ) : (
            <>
              <S.Title>
                <Ballon
                  size="large"
                  title="nutracêuticos"
                  color="secondary"
                  icon={<Potion />}
                />
              </S.Title>
              <S.Subtitle>
                <div>
                  <Link href="/category/nutraceutical">
                    <a>
                      <Label isBold color="gray">
                        {'Nutracêuticos > '}
                      </Label>
                    </a>
                  </Link>
                  <Label isBold color="secondary">
                    {categoryName}
                  </Label>
                </div>
                <div>
                  <Label isBold color="secondary" size="small">
                    {`${categorySum} Opções `}
                  </Label>
                  <Label isBold color="gray" size="small">
                    {'de nutracêuticos cadastrados'}
                  </Label>
                </div>
              </S.Subtitle>

              <Filter
                items={data}
                onSelect={handleSelect}
                color={'secondary'}
              />

              <S.Info>
                <Info />
                <span>
                  As informações aqui presentes visam ser
                  <b> uma fonte de informação e consulta</b> destinada
                  primeiramente a médicos e a outros profissionais da área de
                  saúde. Ela não fornece conselhos médicos nem recomendações de
                  tratamentos, e não substitui a necessidade de consultar um
                  especialista na área de saúde.
                  <Link href="#">
                    <a>
                      <b>
                        {' '}
                        Veja aqui uma lista destes especialistas parceiros.
                      </b>
                    </a>
                  </Link>
                </span>
              </S.Info>

              <S.Grid>
                {loadingItem ? (
                  <Loading />
                ) : (
                  Object.keys(item || [])
                    .filter(
                      (property) =>
                        getTitleByProperty(property) !== '' &&
                        item![property] !== ''
                    )
                    .map((property, index) => {
                      return (
                        <DropItem
                          key={index}
                          title={getTitleByProperty(property)}
                          text={item![property]}
                        />
                      )
                    })
                )}
              </S.Grid>
            </>
          )}
        </S.Content>
      </Container>
      <Footer />
    </S.Wrapper>
  )
}

export default Nutraceutical
