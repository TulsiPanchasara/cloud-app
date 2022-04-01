import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../app/store'
import { applyTheme, themes } from '../src/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
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
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(MyApp)
