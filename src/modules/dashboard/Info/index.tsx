import Ballon from 'components/Ballon'
import Heading from 'components/Heading'
import Label from 'components/Label'
import { humanizeDate } from 'utils/date'
import Potion from 'icons/Potion'
import Chemical from 'icons/Chemical'
import Heart from 'icons/Heart'
import Button from 'components/Button'
import { useRouter } from 'next/dist/client/router'
import { DashboardTemplateProps } from 'templates/Dashboard'
import * as S from './styles'
import { CONST_ROUTES } from '../../../constants/routes'
import { RouteProps } from '../../../types/routes'

const Info = ({ user }: DashboardTemplateProps) => {
  const routes = useRouter()
  const { push } = routes

  if (!user) {
    return null
  }

  const { plan, lastLoginAt, name } = user

  const permittedPlans = plan?.planAreas?.map((item) => item?.area?.name) || []
  const lastLogin = humanizeDate(lastLoginAt)

  const handleClick = (route: RouteProps) => {
    if (permittedPlans.findIndex((item) => item === route.role) >= 0) {
      push(`category${route.path}`)
    }
  }

  return (
    <>
      <S.Name>
        <Heading>
          <>Olá {name}</>
        </Heading>
      </S.Name>
      {!!lastLogin && (
        <S.LastAccess>
          <Label color="gray" size="medium">
            Seu último acesso foi em
          </Label>
          <Label color="primary" size="medium">
            {lastLogin}
          </Label>
        </S.LastAccess>
      )}

      <Label color="primary" size="medium" isBold>
        Seus Produtos contratados:
      </Label>

      <S.Plans>
        <Button size="fit" color="ghost">
          <Ballon
            size="small"
            title="análise B"
            color="tertiary"
            icon={<Heart />}
            subtitle={'Experimente agora você têm direito a <b>5 análises</b>'}
            isDisabled={
              permittedPlans.findIndex((item) => item === 'AnaliseB') < 0
            }
          />
        </Button>

        <Button 
          size="fit" 
          color="ghost"
          onClick={() => handleClick(CONST_ROUTES.Formulation)}
        >
          <Ballon
            size="small"
            title="formulações"
            color="primary"
            icon={<Chemical />}
            subtitle={'Acesse a nossa wiki com mais de <b>130 fórmulas</b>'}
            isDisabled={
              permittedPlans.findIndex((item) => item === CONST_ROUTES.Formulation.role) < 0
            }
          />
        </Button>

        <Button
          size="fit"
          color="ghost"
          onClick={() => handleClick(CONST_ROUTES.Nutraceutical)}
        >
          <Ballon
            size="small"
            title="nutracêuticos"
            color="secondary"
            icon={<Potion />}
            subtitle={'Hoje contamos um banco de <b>260 cadastros</b>'}
            isDisabled={
              permittedPlans.findIndex((item) => item === CONST_ROUTES.Nutraceutical.role) < 0
            }
          />
        </Button>
      </S.Plans>
    </>
  )
}

export default Info
