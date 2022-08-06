import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { Provider as AuthProvider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { NavigationProvider } from 'hooks/use-navigation'

function MyApp({ Component, pageProps }: AppProps) {
  const session = {
    ...pageProps.session
  }
  return (
    <AuthProvider session={session}>
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <Component {...pageProps} />
        </NavigationProvider>
        <GlobalStyles />
        <NextNprogress
          color={theme.colors.linear.first}
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
        />
      </ThemeProvider>
    </AuthProvider>
  )
}
export default MyApp
