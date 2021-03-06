// import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
import { applyTheme, themes } from '../src/theme'
import { useSession, signIn, signOut } from 'next-auth/react'

// const base = css`
//   color: hotpink;
// `

const color = 'black'

const StyledButton = styled.button`
  background-color: hotpink;
  padding: 8px;
  border-radius: 5px;
  margin-top: 16px;
  &:hover {
    background-color: ${color};
    color: white;
  }
`

const Theme: NextPage = () => {
  //fetching out seesion from useSession hook
  const { data: session } = useSession()
  function changeTheme() {
    const theme = window.localStorage.getItem('theme')
    if (theme === 'base') {
      window.localStorage.setItem('theme', 'dark')
      applyTheme(themes.dark)
    } else {
      window.localStorage.setItem('theme', 'base')
      applyTheme(themes.default)
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-500 py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-20 pt-10 text-center">
        {session?.user?.image && (
          <img
            src={session?.user?.image}
            alt=""
            height={50}
            width={50}
            className="rounded-full"
          />
        )}
        <p className="mt-3 text-2xl text-storm-dust-500">
          Signed in as {session?.user?.name}
        </p>

        <p className="mt-3 text-2xl text-storm-dust-500">
          Click Me to change the THEME
        </p>

        <button
          data-testid="theme-change-button"
          className="mt-4 rounded-md bg-primary-600 px-3 py-2 text-neutral-500 "
          onClick={changeTheme}
        >
          change theme
        </button>

        <p className="mt-3 pt-10 text-2xl text-storm-dust-500">
          Hover to change my COLOR (Emotion) {'   '}
          <StyledButton>change theme</StyledButton>
        </p>

        <div
        // css={css`
        //   ${base};
        //   background-color: #eee;
        // `}
        >
          This has a hotpink background. Using inline css props
        </div>
        <a className="mt-4" href="/">
          Go to HOME page
        </a>

        <button
          className="mt-4 rounded-md bg-primary-600 px-3 py-2 text-neutral-500 "
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </main>
    </div>
  )
}
//for pages that need authentication set them Component.auth = true
;(Theme as any).auth = true
export default Theme
