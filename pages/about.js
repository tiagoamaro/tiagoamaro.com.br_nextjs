import { NextSeo } from "next-seo"
import Image from "next/image"

export const About = () => {
  return (
    <>
      <NextSeo title="About" />

      <h1 className="mt-0 mb-2 text-5xl font-medium leading-snug">About</h1>
      <p>Hi,</p>
      <p>
        My name is Tiago, and I&apos;m a brazilian developer living in Rio de
        Janeiro. Writing better software that people will love is my motto, and
        I&apos;m always seeking new talents. I&apos;m focused in web
        technologies and my main programming language is Ruby.
      </p>
      <p>I am currently a developer for The Conversation.</p>

      <h2 className="mb-2 text-2xl font-medium leading-relaxed">
        Where to find me?
      </h2>

      <ul className="space-y-2">
        <li className="flex items-center gap-x-2">
          <Image
            height="32"
            width="32"
            alt="Email"
            src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/solid/mail.svg"
          />

          <p>tiagopadrela at gmail dot com</p>
        </li>

        <li className="flex items-center gap-x-2">
          <Image
            height="32"
            width="32"
            alt="Twitter"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/twitter.svg"
          />

          <a href="https://twitter.com/tiagopadrela" className="underline">
            Twitter
          </a>
        </li>

        <li className="flex items-center gap-x-2">
          <Image
            height="32"
            width="32"
            alt="GitHub"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg"
          />

          <a href="https://github.com/tiagoamaro" className="underline">
            GitHub
          </a>
        </li>

        <li className="flex items-center gap-x-2">
          <Image
            height="32"
            width="32"
            alt="Email"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/devdotto.svg"
          />

          <a href="https://dev.to/tiagoamaro" className="underline">
            Dev.to
          </a>
        </li>
      </ul>
    </>
  )
}

export default About
