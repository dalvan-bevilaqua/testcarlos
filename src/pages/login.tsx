import Auth from 'templates/Auth'

export default function Login() {
  return <Auth />
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Examina Bem'
    }
  }
}
