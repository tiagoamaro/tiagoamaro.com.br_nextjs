import '../styles/style.css'
import { DefaultSeo } from 'next-seo'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        description='Tiago Padrela Amaro personal website. Geek and coder. Twitter: @tiagopadrela'
        titleTemplate='%s | Tiago Padrela Amaro'
      />
      <Component {...pageProps} />
    </>
  )
}
