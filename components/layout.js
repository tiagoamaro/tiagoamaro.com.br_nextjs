import Container from '../components/container'
import Head from 'next/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>Tiago Padrela Amaro</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* Icons */}
        <link rel='apple-touch-icon-precomposed' sizes='144x144' href='/icons/touch-icon-144-precomposed.png' />
        <link rel='shortcut icon' href='/icons/favicon.png' />

        {/* Fonts */}
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Berkshire+Swash&text=Tiago%20Padrela%20Amaro' />
      </Head>
      <Container>
        <NavBar />
        {children}
        <Footer />
      </Container>
    </>
  )
}
