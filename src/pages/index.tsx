import { GetServerSidePropsContext } from 'next'

import Dashboard, { DashboardTemplateProps } from 'templates/Dashboard'

import protectedRoutes from 'utils/protectedRoutes'

export default function Index(props: DashboardTemplateProps) {
  return <Dashboard {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) return {}
  const { user } = session

  return {
    props: {
      user: user
    }
  }
}
