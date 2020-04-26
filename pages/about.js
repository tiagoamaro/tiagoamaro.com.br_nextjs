import Layout from '../components/layout'
import { NextSeo } from 'next-seo'

export default function About () {
  return (
    <Layout>
      <NextSeo title='About' />
      <h1>About</h1>
      <p> My name is Tiago, and I'm a brazilian developer living in Rio de Janeiro. Writing better software that people will love is my motto, and I'm always seeking new talents. I'm focused in web technologies and my main programming language is Ruby.</p>
      <p>
        I am currently a developer for <a href='https://theconversation.com/au/team#platform'>The Conversation.</a>
      </p>
      <h2>Where to find me</h2>
      <ul>
        <li>Email: tiagopadrela at gmail dot com</li>
        <li>GitHub: <a href='https://github.com/tiagoamaro'>@tiagoamaro</a></li>
        <li>Twitter: <a href='https://twitter.com/tiagopadrela'>@tiagopadrela</a></li>
      </ul>
    </Layout>
  )
}
