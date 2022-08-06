import Link from 'next/link'
import HoverLink from 'components/HoverLink'
import Label from 'components/Label'
import Mail from 'icons/Mail'
import Button from 'components/Button'
import Up from 'icons/Up'

import * as S from './styles'
import { DashboardTemplateProps } from 'templates/Dashboard'

const Cards = ({ user }: DashboardTemplateProps) => {
  if (!user) {
    return null
  }

  const {
    plan,
    bloodType,
    age,
    genderDescription,
    pregnant,
    height,
    weight,
    imc,
    imcResult
  } = user

  return (
    <>
      <S.Grid>
        <S.FlexBetween>
          <Label color="primary" size="xmedium" isBold>
            Meus Dados
          </Label>
          <HoverLink>
            <Link href="/" passHref>
              <a>Ver todos</a>
            </Link>
          </HoverLink>
        </S.FlexBetween>
        <S.AboutMe isBase={true}>
          <S.FlexColumn>
            <Label color="white" size="small">
              Plano
            </Label>
            <Label isBold color="white" size="xmedium">
              {plan.name}
            </Label>
          </S.FlexColumn>
          <S.FlexColumn>
            <Label color="white" size="small">
              Gênero
            </Label>
            <Label isBold color="white" size="xmedium">
              {genderDescription}
            </Label>
          </S.FlexColumn>
          <S.FlexColumn>
            <Label color="white" size="small">
              Idade
            </Label>
            <Label isBold color="white" size="xmedium">
              {age} anos
            </Label>
          </S.FlexColumn>

          {pregnant ? (
            <S.FlexColumn>
              <Label color="white" size="small">
                Gravida
              </Label>
              <Label isBold color="white" size="xmedium">
                Sim
              </Label>
            </S.FlexColumn>
          ) : (
            <S.FlexColumn></S.FlexColumn>
          )}

          <S.FlexColumn>
            <Label color="white" size="small">
              Altura | Peso
            </Label>
            <Label isBold color="white" size="xmedium">
              {height} m . {weight} kg
            </Label>
          </S.FlexColumn>
          <S.FlexColumn>
            <Label color="white" size="small">
              Tipo sanguíneo
            </Label>
            <Label isBold color="white" size="xmedium">
              {bloodType.description}
            </Label>
          </S.FlexColumn>
          <S.FlexColumn>
            <Label color="white" size="small">
              IMC - {`${imc}`}
            </Label>
            <Label isBold color="white" size="xmedium">
              {`${imcResult}`}
            </Label>
          </S.FlexColumn>
        </S.AboutMe>
      </S.Grid>
      <S.Grid>
        <S.FlexBetween>
          <Label color="primary" size="xmedium" isBold>
            Último Exame
          </Label>
          <HoverLink>
            <Link href="/" passHref>
              <a>Ver todos</a>
            </Link>
          </HoverLink>
        </S.FlexBetween>
        <S.LastExamBlock isBase={true}>
          <S.FlexColumn>
            <Label color="white" size="small">
              Paciente
            </Label>
            <Label isBold color="white" size="xmedium">
              Benhur
            </Label>
          </S.FlexColumn>
          <S.FlexColumn>
            <Label color="white" size="small">
              Data
            </Label>
            <Label isBold color="white" size="xmedium">
              20 maio
            </Label>
          </S.FlexColumn>
          <S.FlexColumn>
            <Label color="white" size="small">
              Horário
            </Label>
            <Label isBold color="white" size="xmedium">
              10:00 AM
            </Label>
          </S.FlexColumn>
          <S.FlexColumn>
            <Label color="white" size="small">
              Resultado
            </Label>
            <S.UpPercent>
              <Label isBold color="white" size="xmedium">
                70%
              </Label>
              <Up />
            </S.UpPercent>
          </S.FlexColumn>
          <S.Situation>
            <Label color="white" size="small">
              Situação
            </Label>
            <Button isBold color="alert" size="small">
              Monitorar
            </Button>
          </S.Situation>
        </S.LastExamBlock>
      </S.Grid>
      <S.Grid>
        <S.FlexBetween>
          <Label color="primary" size="xmedium" isBold>
            Entre em contato
          </Label>
          <HoverLink>
            <Link href="/#" passHref>
              <a>Ver canais</a>
            </Link>
          </HoverLink>
        </S.FlexBetween>
        <S.ContactBlock>
          <S.Image>
            <Mail />
          </S.Image>
          <S.FlexColumn>
            <Label color="white" size="small" isBold>
              Dúvidas ou sugestões?
            </Label>
            <Label isBold color="white" size="medium">
              contato@examinabem.com
            </Label>
            <HoverLink color="white">
              <Link href="/#" passHref>
                <a>Clique aqui e mande mensagem para gente!</a>
              </Link>
            </HoverLink>
          </S.FlexColumn>
        </S.ContactBlock>
      </S.Grid>
    </>
  )
}

export default Cards
