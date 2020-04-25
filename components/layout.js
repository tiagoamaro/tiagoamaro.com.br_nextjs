import NavBar from '../components/navbar'
import Head from 'next/head'

export default function Theme ({ children }) {
  return (
    <div className='container'>
      <Head>
        <title>Tiago Padrela Amaro</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <NavBar />
      {children}
    </div>
  )
}
