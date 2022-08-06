/* eslint-disable react-hooks/rules-of-hooks */
import Card from 'components/Card'
import HoverLink from 'components/HoverLink'
import Label from 'components/Label'
import { useNavigation } from 'hooks/use-navigation'
import { useRequestNutraceutic } from 'hooks/use-request'
import Chemical from 'icons/Chemical'
import Heart from 'icons/Heart'
import Potion from 'icons/Potion'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { DashboardTemplateProps } from 'templates/Dashboard'
import * as S from './styles'

const News = ({ user }: DashboardTemplateProps) => {
  if (!user) {
    return null
  }

  const [session] = useSession()
  const [nutraceuticalName, setNutraceuticalName] = useState('Vitaminas')
  const { setPageId, setCategorySum, setCategoryName } = useNavigation()

  const { plan } = user

  const permittedPlans = plan?.planAreas?.map((item) => item?.area?.name) || []

  const nutraceuticalIsPermitted =
    permittedPlans.findIndex((item) => item === 'Nutraceuticos') >= 0

  useEffect(() => {
    const GetRandomNutraceutic = async () => {
      const url = '/nutraceutical/get-random-nutraceutic'
      const jwt = session?.user?.jwt || ''
      const data = await useRequestNutraceutic(url, jwt)

      if (data) {
        setNutraceuticalName(data?.nutraceuticalCategory?.name)
        setCategoryName(data?.nutraceuticalCategory?.name)
        setCategorySum(data?.nutraceuticalCategory?.sum)
        setPageId(data?.nutraceuticalCategory?.id)
      }
    }

    if (nutraceuticalIsPermitted) {
      GetRandomNutraceutic()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <S.Title>
        <Label color="primary" size="xmedium" isBold>
          Últimas atualizações
        </Label>
        <HoverLink>
          <Link href="/" passHref>
            <a>Ver todas</a>
          </Link>
        </HoverLink>
      </S.Title>
      <Card
        title={'Nova Fórmula!'}
        color={'primary'}
        icon={<Chemical />}
        subtitle={
          'Agora você pode ter acesso a tratamentos para regeneração neural'
        }
        url={'#'}
      />
      <Card
        title={`Saiba mais sobre a ${nutraceuticalName}`}
        color={nutraceuticalIsPermitted ? 'secondary' : 'gray'}
        isDisabled={!nutraceuticalIsPermitted}
        icon={<Potion />}
        subtitle={`Agora você pode ter acesso a tratamentos para ${nutraceuticalName}`}
        url={'/nutraceutical'}
      />
      <Card
        title={'Veja seu último exame.'}
        color={'tertiary'}
        icon={<Heart />}
        subtitle={'Acesse o resultado da sua última análisefeita em 22 de maio'}
        url={'#'}
      />
    </>
  )
}

export default News
