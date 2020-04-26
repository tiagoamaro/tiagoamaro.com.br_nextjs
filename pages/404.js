import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const ANIMATION_TIMEOUT = 2000

export default function Custom404 () {
  const [mustRoll, doABarrelRoll] = useState(false)
  const rollClass = mustRoll ? 'roll' : ''

  const roll = (value) => {
    doABarrelRoll(value)
    setTimeout(() => doABarrelRoll(false), ANIMATION_TIMEOUT)
  }

  return (
    <div className={rollClass}>
      <Head>
        <title>404! Oh mah gah! D=</title>
      </Head>
      <h1>404!</h1>
      <h2>Geez! D=</h2>
      <h3>Can anyone take care of it?</h3>
      <a href='#' onClick={() => roll(true)}>Do a barrel roll!</a> or <Link href='/'><a>go to the home page</a></Link>

      <div className={rollClass}>
        <img src='/images/peppy.png' />
      </div>

      <style jsx global>{`
        @-moz-keyframes roll {
            100% {
                -moz-transform: rotate(360deg);
            }
        }

        @-o-keyframes roll {
            100% {
                -o-transform: rotate(360deg);
            }
        }

        @-webkit-keyframes roll {
            100% {
                -webkit-transform: rotate(360deg);
            }
        }

        .roll {
            -moz-animation-duration: 2s;
            -moz-animation-name: roll;
            -moz-animation-iteration-count: 1;
            -webkit-animation-duration: 2s;
            -webkit-animation-name: roll;
            -webkit-animation-iteration-count: 1;
            -o-animation-duration: 2s;
            -o-animation-name: roll;
            -o-animation-iteration-count: 1;
        }`}
      </style>
    </div>
  )
}
