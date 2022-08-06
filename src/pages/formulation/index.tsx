import { useEffect, useState } from 'react'
import { useNavigation } from 'hooks/use-navigation'
import { Container } from 'components/Container'
import Card from 'components/Card'
import Label from 'components/Label'
import { Table } from 'components/Table'
import Ballon from 'components/Ballon'
import Filter from 'components/Filter'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Loading from 'components/Loading'
import Collapse from 'components/Collapse'

import * as S from './styles'
import Potion from 'icons/Potion'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import { useSession } from 'next-auth/client'
import Info from 'icons/Info'
import { useRequestDisease, useRequestPrescription } from 'hooks/use-request'

type NutraceuticalProps = {
  id: string
  name: string
  commonName: string
  recomendedDosages: string
  minDosage: number
  maxDosage: number
  unity: string
  medicalOnly: boolean
}

type PrescriptionDetailsProps = {
  dosage: string
  group: number
  posology: string
  information: string
  note: string
  nutraceutical: NutraceuticalProps
}

type PrescriptionProps = {
  id: string
  name: string
  description: string
  prescriptionDetails: PrescriptionDetailsProps[]
}

const Formulation = () => {
  const { pageId, categorySum, categoryName } = useNavigation()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [item, setItem] = useState<PrescriptionProps>()
  const [formulations, setFormulations] = useState<
    PrescriptionDetailsProps[][]
  >([])
  const [session] = useSession()
  const { setCategorySum } = useNavigation()

  const routes = useRouter()
  const { push } = routes

  //Visualiza a formulação e atualiza a vizualização
  async function GetById(id: string | number) {
    const url = `/prescription/get-by-id-with-details/${id}`
    const jwt = session?.user.jwt || ''

    const data: PrescriptionProps = await useRequestPrescription(url, jwt)
    !!data && setItem(data)

    const groups = data.prescriptionDetails.map(function (
      o: PrescriptionDetailsProps
    ) {
      return o.group
    })

    const max = Math.max(...groups)
    const grouped: PrescriptionDetailsProps[][] = []

    for (let index = 1; index < max + 1; index++) {
      if (!data.prescriptionDetails[index]) continue

      const value = data.prescriptionDetails.filter(function (it) {
        return it.group === index
      })

      grouped.push(value)
    }

    setFormulations(grouped)
  }

  async function GetByCategoryId(id: string) {
    setLoading(true)

    const url = `/disease-prescription/get-by-disease-id/${id}`
    const jwt = session?.user.jwt || ''
    const data = await useRequestDisease(url, jwt)
    const items = data.map(function (item: any) {
      return item.prescription
    })

    setData(items)
    setCategorySum(items.length)
    !!items[0]?.id && GetById(items[0]?.id)
    setLoading(false)
  }

  function GetFormulationInfo(qa: PrescriptionDetailsProps[]) {
    const result = qa.filter(function (i) {
      return (
        i.posology !== '' && i.posology !== null && i.posology !== undefined
      )
    })

    return result[0]
  }

  useEffect(() => {
    if (!session?.user?.jwt) {
      push('/login')
    } else if (pageId === '') {
      push('/category/formulation')
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
        <S.Title>
          <Ballon
            size="large"
            title="formulações"
            color="primary"
            icon={<Potion />}
          />
        </S.Title>
      </Container>
      <S.Disease>
        <Container size="medium">
          <S.DiseaseTitle>{categoryName}</S.DiseaseTitle>
          <S.DiseaseDescription>
            {/* <div>{item.description}</div> */}
            {
              'Doença progressiva que destrói a memória e outras funções Doença progressiva que destrói a memória e outras funções. Doença progressiva que destrói a memória e outras funções. Doença progressiva que destrói a memória e outras funções. Doença progressiva que destrói a memória e outras funções. Doença progressiva que destrói a memória e outras funções. Doença progressiva que destrói a memória e outras funções.'
            }
          </S.DiseaseDescription>
        </Container>
      </S.Disease>
      <Container size="medium">
        <S.Content>
          {loading ? (
            <Loading />
          ) : (
            <>
              <S.Subtitle>
                <div>
                  <Link href="/category/formulation">
                    <a>
                      <Label isBold color="gray">
                        {'Formulações > '}
                      </Label>
                    </a>
                  </Link>
                  <Label isBold color="primary">
                    {categoryName}
                  </Label>
                </div>
                <div>
                  <Label isBold color="primary" size="small">
                    {`${categorySum} Opções `}
                  </Label>
                  <Label isBold color="gray" size="small">
                    {'de formulações cadastradas'}
                  </Label>
                </div>
              </S.Subtitle>

              <Filter items={data} onSelect={handleSelect} color={'primary'} />

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

              {item && item !== undefined && item !== null ? (
                <>
                  {!!item.name && (
                    <S.Prescription>
                      <span>{item.name}</span>
                    </S.Prescription>
                  )}
                  {!!item.description && (
                    <S.PrescriptionDescription>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </S.PrescriptionDescription>
                  )}
                </>
              ) : null}

              {formulations?.length ? (
                formulations.map(function (formulation, index) {
                  const prescriptionDetail = GetFormulationInfo(formulation)
                  const component = (
                    <S.Formulation>
                      <Table>
                        <Table.Head color="primary">
                          <Table.TH>
                            <Label isBold color="primary">
                              PRESCRIÇÃO
                            </Label>
                          </Table.TH>
                          <Table.TH>
                            <Label isBold color="primary">
                              DOSAGEM
                            </Label>
                          </Table.TH>
                        </Table.Head>
                        <Table.Body>
                          {formulation.map((_, index) => {
                            return (
                              <Table.TR key={index}>
                                <Table.TD>
                                  {_.nutraceutical.commonName}
                                </Table.TD>
                                <Table.TD>
                                  {
                                    <Label isBold color={'dark'}>
                                      {_.dosage}
                                    </Label>
                                  }
                                </Table.TD>
                              </Table.TR>
                            )
                          })}
                        </Table.Body>
                      </Table>
                      <S.FormulationInfo>
                        {!!prescriptionDetail.posology && (
                          <Card
                            size={'large'}
                            color={'gray'}
                            title={
                              <Label color={'primary'} size={'xlarge'}>
                                Posologia
                              </Label>
                            }
                            subtitle={
                              <Label>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: prescriptionDetail.posology
                                  }}
                                />
                              </Label>
                            }
                          />
                        )}
                        {!!prescriptionDetail.note && (
                          <Card
                            size={'large'}
                            color={'white'}
                            title={
                              <Label color={'red'} size={'xlarge'}>
                                Observações
                              </Label>
                            }
                            subtitle={
                              <Label>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: prescriptionDetail.note
                                  }}
                                />
                              </Label>
                            }
                          />
                        )}
                      </S.FormulationInfo>
                    </S.Formulation>
                  )

                  return (
                    <S.Grid key={index}>
                      <Collapse
                        key={index}
                        title={'Formulação ' + formulation[0].group}
                        color="primary"
                      >
                        {component}
                      </Collapse>
                    </S.Grid>
                  )
                })
              ) : (
                <S.Formulation>
                  <Label>Ops! Esta formulação não possui detalhes</Label>
                </S.Formulation>
              )}
            </>
          )}
        </S.Content>
      </Container>
      <Footer />
    </S.Wrapper>
  )
}

export default Formulation
