import NavBar from '../components/navbar'
import Head from 'next/head'

export default function Theme ({ children }) {
  return (
    <div className='container'>
      <Head>
        <title>Tiago Padrela Amaro</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* Icons */}
        <link rel='apple-touch-icon-precomposed' sizes='144x144' href='/icons/touch-icon-144-precomposed.png' />
        <link rel='shortcut icon' href='/icons/favicon.png' />
      </Head>
      <NavBar />
      {children}
    </div>
  )
}
