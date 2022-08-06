import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import News from 'modules/dashboard/News'
import Info from 'modules/dashboard/Info'
import Cards from 'modules/dashboard/Cards'

import { UserProps } from 'types/user'

import * as S from './styles'

export type DashboardTemplateProps = {
  user: UserProps
}

const Dashboard = ({ user }: DashboardTemplateProps) => {
  return (
    <S.Wrapper>
      <Header />
      <Container size="small">
        <S.Grid>
          <S.AreaA>
            <Info user={user} />
          </S.AreaA>
          <S.AreaB>
            <News user={user} />
          </S.AreaB>
          <S.AreaC>
            <Cards user={user} />
          </S.AreaC>
        </S.Grid>
      </Container>
      <Footer />
    </S.Wrapper>
  )
}

export default Dashboard
