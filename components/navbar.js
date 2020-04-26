import Link from 'next/link'

export default function NavBar () {
  return (
    <nav className='pure-g'>
      <div className='pure-u-1 pure-u-lg-1-5 berkshire'>Tiago Padrela Amaro</div>
      <div className='pure-u-1 pure-u-lg-1-5 text-center'>
        <Link href='/'><a>Tweets</a></Link>
      </div>
      <div className='pure-u-1 pure-u-lg-1-5 text-center'>
        <Link href='/posts'><a>Posts</a></Link>
      </div>
      <div className='pure-u-1 pure-u-lg-1-5 text-center'>
        <Link href='/about'><a>About</a></Link>
      </div>
      <div className='pure-u-1 pure-u-lg-1-5 text-center'>
        <Link href='/quotes'><a>Quotes</a></Link>
      </div>
    </nav>
  )
}
