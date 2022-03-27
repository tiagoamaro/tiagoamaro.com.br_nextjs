import "../styles/globals.css"
import { DefaultSeo } from "next-seo"
import { Layout } from "../components/Layout"
import { Header } from "../components/Header"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <DefaultSeo
        description="Tiago Padrela Amaro personal website. Geek and coder. Twitter: @tiagopadrela"
        titleTemplate="%s | Tiago Padrela Amaro"
      />
      <Component {...pageProps} />
    </Layout>
  )
}
