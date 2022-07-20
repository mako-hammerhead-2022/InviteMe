import React from 'react'
import { Link } from 'react-router-dom'
// import Spline from '@splinetool/react-spline'
// import '../../server/public/styles.css'

export default function HomePage() {
  return (
    <>
      <div className="spline" id="spline">
        {/* <div className="topRight">
          <ul className="topList">
            <Link to="/">
              <li className="topListItem">GUEST LIST</li>
            </Link>
          </ul>
        </div> */}
        <iframe
          src="https://my.spline.design/lightingtoruscopycopy-a60a09f95d95ceac4411d811d075f95f/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
        {/* <Spline
        className="spline"
        style={{ height: '100vh' }}
        scene="https://prod.spline.design/0SuerZra4-79qrFY/scene.splinecode"
      /> */}
      </div>
    </>
  )
}
