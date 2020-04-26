import Link from 'next/link'

export default function NavBar () {
  return (
    <nav class='pure-g'>
      <div class='pure-u-1 pure-u-lg-1-5 text-center berkshire'>Tiago Padrela Amaro</div>
      <div class='pure-u-1 pure-u-lg-1-5 text-center'>
        <Link href='/'>Tweets</Link>
      </div>
      <div class='pure-u-1 pure-u-lg-1-5 text-center'>
        <Link href='/posts'>Posts</Link>
      </div>
      <div class='pure-u-1 pure-u-lg-1-5 text-center'>
        <Link href='/about'>About</Link>
      </div>
      <div class='pure-u-1 pure-u-lg-1-5 text-center'>
        <Link href='/quotes'>Quotes</Link>
      </div>
    </nav>
  )
}
