import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  const expires = (session?.expires || 0) < Date.now()

  if (!session || expires) {
    context.res.setHeader('Location', `/login`)

    context.res.statusCode = 302
  }

  return session
}

export default protectedRoutes
