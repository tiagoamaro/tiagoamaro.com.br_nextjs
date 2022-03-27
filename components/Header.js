import Link from "next/link"

export const Header = () => {
  return (
    <header className="bg-teal-600 text-lg text-white">
      <div className="lg:align-i flex flex-col space-y-4 py-8 text-center lg:flex-row lg:items-center lg:justify-center lg:space-y-0 lg:space-x-8">
        <Link href="/">
          <a className="font-['Berkshire_Swash'] text-2xl">
            Tiago Padrela Amaro
          </a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="about">
          <a className="hover:underline">About</a>
        </Link>
        <Link href="posts">
          <a className="hover:underline">Posts</a>
        </Link>
        <Link href="quotes">
          <a className="hover:underline">Quotes</a>
        </Link>
      </div>
    </header>
  )
}
