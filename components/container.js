export default function Container ({ children }) {
  return (
    <div class='pure-g'>
      <div class='pure-u-1 pure-u-lg-1-5' />
      <div class='pure-u-1 pure-u-lg-3-5'>{children}</div>
      <div class='pure-u-1 pure-u-lg-1-5' />
    </div>
  )
}
