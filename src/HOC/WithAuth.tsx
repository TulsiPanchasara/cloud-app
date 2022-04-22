import { useSession, signIn } from 'next-auth/react'
import { ReactElement, useEffect } from 'react'
import { NextPage } from 'next'

const WithAuth: NextPage<{ children: ReactElement }> = ({ children }) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const hasUser = !!session?.user
  useEffect(() => {
    if (!loading && !hasUser) {
      signIn()
    }
  }, [loading, hasUser])
  if (loading || !hasUser) {
    return <div>Waiting for session...</div>
  }
  return children
}

export default WithAuth
