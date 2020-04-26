import { useEffect } from 'react'

export default function Tweets () {
  useEffect(() => {
    const anchor = document.createElement('a')
    anchor.setAttribute('class', 'twitter-timeline')
    anchor.setAttribute('data-theme', 'dark')
    anchor.setAttribute('data-dnt', 'true')
    anchor.setAttribute('href', 'https://twitter.com/tiagopadrela')
    document.getElementsByClassName('twitter-embed')[0].appendChild(anchor)

    const script = document.createElement('script')
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.getElementsByClassName('twitter-embed')[0].appendChild(script)
  }, [])

  return (
    <div className='twitter-embed' />
  )
}
