import NextAuth, { User } from 'next-auth'
import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'
import api from 'services/api'
import { UserProps } from 'types/user'

type AuthorizeProps = {
  email: string
  password: string
}

type ErrorResponse = {
  message: string
}

const options = {
  pages: {
    signIn: '/login'
  },
  session: {
    jwt: true,
    maxAge: 60 * 60 * 2,
    updateAge: 60 * 50 * 2
  },
  providers: [
    Providers.Credentials({
      name: 'Login',
      credentials: {},
      async authorize({ email, password }: AuthorizeProps) {
        const url = `${String(
          process.env.NEXT_PUBLIC_API_AUTH_URL
        )}/authentication/login`

        const response = await api
          .post(url, { email, password })
          .then((request) => {
            return request.data
          })
          .catch((error) => {
            return error?.response
          })

        if (response?.success) {
          return { ...response.data, jwt: response.data.token }
        } else {
          if (response?.data) {
            const error = response.data.errors
              .map((err: ErrorResponse) => err?.message)
              .toString()

            throw new Error(error)
          } else {
            const error =
              response?.statusText && response?.status
                ? `${response.statusText} ${response.status}`
                : 'Ops, algo deu errado...'
            throw new Error(error)
          }
          return false
        }
      }
    })
  ],
  callbacks: {
    session: async (session: Session, user: UserProps & User) => {
      session.user = user
      return Promise.resolve(session)
    },
    jwt: async (token: JWT, user: UserProps & User) => {
      if (user) {
        const current = user
        delete current.token
        token.jwt = user.token
        token = current
      }
      return Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
