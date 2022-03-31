import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import MainContainer from '../components/MainContainer'
import SecondContainer from '../components/SecondContainer'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold ">
          {t('welcomeLine')}{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            {t('global.nextJs')}
          </a>
        </h1>

        <p className="mt-3 mb-5 text-2xl">
          {t('start.by.editing')}{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <MainContainer />
        <SecondContainer />
      </main>
    </div>
  )
}

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
