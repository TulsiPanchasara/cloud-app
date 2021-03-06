import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../app/store'
import { applyTheme, themes } from '../src/theme'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import WithAuth from '../src/HOC/WithAuth'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    const theme = window.localStorage.getItem('theme')

    if (theme === 'base') {
      applyTheme(themes.default)
    } else if (theme === 'dark') {
      applyTheme(themes.dark)
    } else {
      window.localStorage.setItem('theme', 'base')
      applyTheme(themes.default)
    }
  }, [])

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {(Component as any).auth ? (
          <WithAuth>
            <Component {...pageProps} />
          </WithAuth>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </SessionProvider>
  )
}

export default appWithTranslation(MyApp)
