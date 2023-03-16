import '@/styles/globals.css'
import MainContainer from '../../components/MainContainer'

export default function App({ Component, pageProps }) {
  return (
    <>
    <main>
        <MainContainer>
          <Component {...pageProps}/>
        </MainContainer>
    </main>
    </>
  )
  
}
