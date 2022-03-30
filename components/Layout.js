import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container p-4 lg:mx-auto">{children}</div>
      <Footer />
    </>
  )
}
