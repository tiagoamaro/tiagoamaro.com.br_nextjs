import "../styles/globals.css"
import { DefaultSeo } from "next-seo"
import { Layout } from "../components/Layout"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        description="Tiago Padrela Amaro personal website. Geek and coder. Twitter: @tiagopadrela"
        defaultTitle="Tiago Padrela Amaro"
        titleTemplate="%s | Tiago Padrela Amaro"
      />
      <Component {...pageProps} />
    </Layout>
  )
}
