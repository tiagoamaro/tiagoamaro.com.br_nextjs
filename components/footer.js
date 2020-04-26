export default function Footer () {
  const year = (new Date()).getFullYear()

  return (
    <div className='pure-g'>
      <div className='pure-u-5-5 text-center'>
        <small>
          {year} - Built with NextJS and PureCSS. Hosted with on Vercel.
        </small>
      </div>

      <style jsx>
        {`
          .text-center {
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
