import { Header } from "./Header"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8">{children}</div>
    </>
  )
}
