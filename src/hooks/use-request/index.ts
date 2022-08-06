import api from 'services/api'
import api_disease from 'services/api-disease'
import api_nutraceutic from 'services/api-nutraceutic'
import api_prescription from 'services/api-prescription'
import { signOut } from 'next-auth/client'

type ParamsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

/*
  only client side
*/
export async function useRequest(
  url: string,
  jwt: string,
  params?: ParamsProps
) {
  const AuthStr = 'Bearer '.concat(jwt || '')

  return await api
    .get(url, {
      headers: { Authorization: AuthStr },
      params: params
    })
    .then((response) => {
      return response.data.data
    })
    .catch((e) => {
      console.error(e.message)
      signOut()
      return null
    })
}

export async function useRequestNutraceutic(
  url: string,
  jwt: string,
  params?: ParamsProps
) {
  const AuthStr = 'Bearer '.concat(jwt || '')

  return await api_nutraceutic
    .get(url, {
      headers: { Authorization: AuthStr },
      params: params
    })
    .then((response) => {
      return response.data.data
    })
    .catch((e) => {
      console.error(e.message)
      signOut()
      return null
    })
}

export async function useRequestDisease(
  url: string,
  jwt: string,
  params?: ParamsProps
) {
  const AuthStr = 'Bearer '.concat(jwt || '')

  return await api_disease
    .get(url, {
      headers: { Authorization: AuthStr },
      params: params
    })
    .then((response) => {
      return response.data.data
    })
    .catch((e) => {
      console.error(e.message)
      signOut()
      return null
    })
}

export async function useRequestPrescription(
  url: string,
  jwt: string,
  params?: ParamsProps
) {
  const AuthStr = 'Bearer '.concat(jwt || '')

  return await api_prescription
    .get(url, {
      headers: { Authorization: AuthStr },
      params: params
    })
    .then((response) => {
      return response.data.data
    })
    .catch((e) => {
      console.error(e.message)
      signOut()
      return null
    })
}
