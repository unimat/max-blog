import Head from 'next/head'
import '../styles/globals.css'

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-widht, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
