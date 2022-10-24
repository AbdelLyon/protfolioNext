import { NextPage } from 'next'
import Head from 'next/head'
import { Props } from '../interfaces/interfaces'

const Layout: NextPage<Partial<Props>> = ({ title, children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default Layout;