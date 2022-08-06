import { useEffect } from 'react'
import { useNavigation } from 'hooks/use-navigation'
import { Container } from 'components/Container'

import Footer from 'components/Footer'
import Header from 'components/Header'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'
import { useSession } from 'next-auth/client'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Card from 'components/Card'
import Chemical from 'icons/Chemical'
import { Grid } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormLabel from '@mui/material/FormLabel'
import { Content } from 'components/Ballon/styles'
import Label from 'components/Label'

const Formulation = () => {
  const { pageId } = useNavigation()
  const [session] = useSession()

  const routes = useRouter()
  const { push } = routes

  useEffect(() => {
    console.log(session)
    if (!session?.user?.jwt) {
      push('/login')
    } else if (pageId === '') {
      push('/perfil')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId])

  if (!session?.user?.jwt || pageId === '') {
    return null
  }

  return (
    <S.Wrapper>
      <Header />
      <Container size="small">
        <Content>
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={8}>
              <S.Name>
                <Heading>
                  <>{session.user.name}</>
                </Heading>
              </S.Name>
            </Grid>
            <Grid xs={12} sm={4}>
              <>
                {session.user.plan.name.toUpperCase() === 'PROFESSIONAL' && (
                  <Card
                    color={'linear'}
                    size={'large'}
                    icon={<Chemical />}
                    subtitle={
                      'Você está no Plano ' +
                      session.user.plan.name.toUpperCase()
                    }
                  />
                )}

                {session.user.plan.name.toUpperCase() !== 'PROFESSIONAL' && (
                  <Card
                    color={'linear'}
                    size={'large'}
                    icon={<Chemical />}
                    subtitle={
                      'Você está no Plano ' +
                      session.user.plan.name.toUpperCase()
                    }
                    info={'Fazer upgrade'}
                  />
                )}
              </>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome Completo:"
                type="text"
                required
                aria-label="email"
                value={session.user.name}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{ fontSize: '1.5rem', color: '#635CF7' }}
                >
                  Grávida?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="E-mail:"
                type="email"
                required
                value={session.user.email}
                aria-label="email"
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <TextField
                label="Altura:"
                type="text"
                required
                value={session.user.height}
                aria-label="text"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="Peso:"
                type="text"
                required
                value={'00'}
                aria-label="text"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="ICM:"
                type="text"
                required
                value={session.user.imc}
                aria-label="text"
              />
            </Grid>
          </Grid>

          <br></br>

          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={3}>
              <TextField
                label="Idade:"
                type="text"
                required
                aria-label="text"
                value={session.user.age}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Gênero:"
                type="text"
                required
                value={session.user.genderDescription}
                aria-label="text"
              />
            </Grid>

            <Grid item xs={12} sm={2} alignSelf="center">
              <Label>Resultado IMC</Label>
            </Grid>

            <Grid item xs={12} sm={4}>
              <S.DiseaseNormal>{session.user.imcResult}</S.DiseaseNormal>
            </Grid>
          </Grid>
          <br></br>
          <br></br>

          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={6}>
              <TextField
                label="CEP:"
                type="text"
                required
                aria-label="text"
                value="95660-000"
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <TextField
                label="Cidade:"
                type="text"
                required
                value="Porto Alegre"
                aria-label="text"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="Estado:"
                type="text"
                required
                value="RS"
                aria-label="text"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="Pais:"
                type="text"
                required
                value="Brasil"
                aria-label="text"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Endereço Completo:"
                type="text"
                required
                aria-label="text"
                value="Rua Epitássio Pessoa"
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <TextField
                label="N°:"
                type="text"
                required
                value="1752"
                aria-label="text"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="Compl.:"
                type="text"
                required
                value=""
                aria-label="text"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="Bairro:"
                type="text"
                required
                value="Centro"
                aria-label="text"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Telefone de contato:"
                type="text"
                required
                aria-label="text"
                value="51 3333 0101"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label="Celular:"
                type="text"
                required
                aria-label="text"
                value="+ 55 51 99916 1001"
              />
            </Grid>
          </Grid>

          <br></br>

          <Grid container justifyContent="flex-end">
            <Button color="secondary" size="large">
              SALVAR
            </Button>
          </Grid>
        </Content>
      </Container>

      <Footer />
    </S.Wrapper>
  )
}

export default Formulation
