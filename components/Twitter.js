import { useEffect } from "react"

// TODO: Twitter widget JS raises an error when unmounting the component in the middle
// TODO: of its lifecycle. This should be fixed.
export const Twitter = () => {
  useEffect(() => {
    const s = document.createElement("script")
    s.setAttribute("src", "https://platform.twitter.com/widgets.js")
    s.setAttribute("async", "true")
    document.head.appendChild(s)
  }, [])

  return (
    <div className="text-center">
      <a
        className="twitter-timeline"
        href="https://twitter.com/tiagopadrela"
        data-width="1000"
      >
        Tweets by tiagopadrela
      </a>
    </div>
  )
}
