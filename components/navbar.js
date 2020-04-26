import Link from 'next/link'

export default function NavBar () {
  return (
    <nav className='pure-g navbar'>
      <div className='pure-u-1 pure-u-lg-1-5 berkshire green-casal brand'>Tiago Padrela Amaro</div>
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

      <style jsx>
        {`
          .navbar {
            padding: 30px 0;
          }

          .brand {
            font-size: 1.5em;
          }
          
          .text-center {
            text-align: center;
          }

          .green-casal {
            color: #105B63;
          }
        `}
      </style>
    </nav>
  )
}
