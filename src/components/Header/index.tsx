import Link from 'next/link'
import Logo from 'components/Logo'
import * as S from './styles'

import Button from 'components/Button'
import { HiMenu } from 'react-icons/hi'
import MediaMatch from 'components/MediaMatch'

import { useState } from 'react'
import Portal from 'components/Portal'
import Navbar from 'components/Navbar'
import HoverLink from 'components/HoverLink'
import Label from 'components/Label'
import { signOut } from 'next-auth/client'

export const Header = () => {
  const [openHamburfer, setOpenHamburfer] = useState(false)

  return (
    <>
      <S.Header>
        <S.Container size="medium">
          <div>
            <Link href="/" passHref>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <MediaMatch greaterThan="medium">
            <Navbar />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Button
              color="ghost"
              size="fit"
              onClick={() => setOpenHamburfer(true)}
            >
              <S.Hamburger>
                <HiMenu size={30} />
              </S.Hamburger>
            </Button>
          </MediaMatch>
        </S.Container>
      </S.Header>
      <Portal isOpen={openHamburfer} setOpen={setOpenHamburfer}>
        <S.PortalContainer>
          <div onClick={() => setOpenHamburfer(false)}>
            <Link href="/" passHref>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <S.Divisor />
          <div onClick={() => setOpenHamburfer(false)}>
            <Label isBold>
              <HoverLink size="large">
                <Link href="/#" passHref>
                  PERFIL
                </Link>
              </HoverLink>
            </Label>
          </div>
          <div onClick={() => setOpenHamburfer(false)}>
            <Label isBold>
              <HoverLink size="large">
                <Link href="/" passHref>
                  DASHBOARD
                </Link>
              </HoverLink>
            </Label>
          </div>
          <div onClick={() => setOpenHamburfer(false)}>
            <Label isBold>
              <HoverLink size="large">
                <Link href="/category/nutraceutical" passHref>
                  NUTRACEUTICOS
                </Link>
              </HoverLink>
            </Label>
          </div>
          <div onClick={() => setOpenHamburfer(false)}>
            <Label isBold>
              <HoverLink size="large">
                <Link href="/category/formulation" passHref>
                  FORMULAÇÕES
                </Link>
              </HoverLink>
            </Label>
          </div>

          <Button
            onClick={() => signOut()}
            color="ghost"
            size="fit"
            isBold={false}
          >
            <Label color="darkest">SAIR</Label>
          </Button>
        </S.PortalContainer>
      </Portal>
    </>
  )
}

export default Header
