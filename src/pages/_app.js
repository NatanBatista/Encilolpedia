import '@/styles/globals.css'
import Head from 'next/head'
import MainContainer from '../../components/MainContainer'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com'/>
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin/>
      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
      <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap' rel='stylesheet'/>
    </Head>
    <main>
        <MainContainer>
          <Component {...pageProps}/>
        </MainContainer>
    </main>
    </>
  )
  
}
