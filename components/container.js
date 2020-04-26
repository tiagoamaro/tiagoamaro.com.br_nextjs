export default function Container ({ children }) {
  return (
    <div className='pure-g'>
      <div className='pure-u-lg-1-5 pure-u-1-24' />
      <div className='pure-u-lg-3-5 pure-u-22-24'>{children}</div>
      <div className='pure-u-lg-1-5 pure-u-1-24' />
    </div>
  )
}
