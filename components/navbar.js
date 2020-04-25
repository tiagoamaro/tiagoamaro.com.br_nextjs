import { useState } from 'react'
import Link from 'next/link'

export default function NavBar () {
  const [isOpen, toggleOpen] = useState(false)
  const mobileNavBarClass = isOpen ? 'is-active' : ''

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample' onClick={() => toggleOpen(!isOpen)}>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>

      <div id='navbarBasicExample' className={`navbar-menu ${mobileNavBarClass}`}>
        <div className='navbar-start'>
          <Link href='/'>
            <a className='navbar-item'>
              Tweets
            </a>
          </Link>

          <Link href='/about'>
            <a className='navbar-item'>
              About
            </a>
          </Link>

          <Link href='/posts'>
            <a className='navbar-item'>
              Posts
            </a>
          </Link>

          <Link href='/quotes'>
            <a className='navbar-item'>
              Quotes
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
