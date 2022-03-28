import { Header } from "./Header"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container p-4 lg:mx-auto">{children}</div>
    </>
  )
}
