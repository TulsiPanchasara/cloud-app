import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { applyTheme, themes } from '../src/theme'

const Theme: NextPage = () => {
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

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-storm-dust-500">
          Welcome to{' '}
          <a className="text-primary-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl text-storm-dust-500">
          Get started by editing{' '}
          <code className="rounded-md bg-mine-shaft-500 p-3 font-mono text-lg text-storm-dust-500">
            pages/index.tsx
          </code>
        </p>

        <button
          className="mt-4 rounded-md bg-primary-600 px-3 py-2 text-neutral-500 "
          onClick={changeTheme}
        >
          change theme
        </button>
      </main>
    </div>
  )
}

export default Theme
