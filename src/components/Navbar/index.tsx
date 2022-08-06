import Link from 'next/link'

import * as S from './styles'
import HoverLink from 'components/HoverLink'
import Notify from 'components/Notify'
import Button from 'components/Button'

import { useRouter } from 'next/dist/client/router'

import { signOut } from 'next-auth/client'
import Label from 'components/Label'
import { RouteProps } from 'types/routes'
import { CONST_ROUTES } from 'constants/routes'

export const Navbar = () => {

  const routes = useRouter()
  const { push } = routes

  const handleClick = (route: RouteProps) => {
      push(`${route.path}`)
  }

  return (
    <S.Navbar>
      <S.Menu>
        <S.Item>
          <HoverLink size="medium">
            <Link href="/" passHref>
              a examina bem
            </Link>
          </HoverLink>
        </S.Item>
        <S.Item>
          <HoverLink size="medium">
            <Link href="/" passHref>
              contato
            </Link>
          </HoverLink>
        </S.Item>
      </S.Menu>

      <S.CallToActions>
        <div>
          <Notify />
        </div>
        <div>
          <Button color="linear" size="medium" isBold={false}  onClick={() => handleClick(CONST_ROUTES.Perfil)}>
            <span>PERFIL</span>
          </Button>
        </div>
        <div>
          <Button
            onClick={() => signOut()}
            color="ghost"
            size="fit"
            isBold={false}
          >
            <Label color="darkest">SAIR</Label>
          </Button>
        </div>
      </S.CallToActions>
    </S.Navbar>
  )
}

export default Navbar
