import { FormEvent, useState, useEffect } from 'react'

import Link from 'next/link'
import Button from 'components/Button'
import HoverLink from 'components/HoverLink'
import Logo from 'components/Logo'
import TextField from 'components/TextField'
import * as S from './styles'
import Loading from 'components/Loading'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import Waves from 'components/Waves'

const Auth = () => {
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState<boolean | undefined>(true)
  const routes = useRouter()
  const { push } = routes

  const [values, setValues] = useState({ email: '', password: '' })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  useEffect(() => {
    setLoading(false)
    setError('')
  }, [])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    setLoading(true)
    !!error && setError('')

    const result = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false
    })

    setLoading(false)

    if (result?.error) {
      setError(result?.error)
      return
    }

    if (result?.ok) {
      push('/')
      return
    }
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Form onSubmit={handleSubmit}>
          <Logo />
          <S.InputGroup>
            <TextField
              error={!!error}
              label="E-mail:"
              type="email"
              required
              aria-label="email"
              onInputChange={(v) => handleInput('email', v)}
            />
            <TextField
              error={!!error}
              label="Senha:"
              type="password"
              required
              aria-label="password"
              onInputChange={(v) => handleInput('password', v)}
            />
          </S.InputGroup>
          <S.ErrorMessage error={!!error}>
            <span>{error}</span>
          </S.ErrorMessage>
          <S.ActionGroup>
            <HoverLink>
              <Link href="/forgot-password" passHref>
                Esqueci a Senha
              </Link>
            </HoverLink>
            <Button color="darker" size="medium" type="submit">
              <>{loading ? <Loading /> : <span>LOGIN</span>}</>
            </Button>
          </S.ActionGroup>
        </S.Form>
        <S.Copyright>
          examinaBem © 2022 Todos os direitos reservados.
        </S.Copyright>
      </S.Content>
      <Waves />
    </S.Wrapper>
  )
}

export default Auth
