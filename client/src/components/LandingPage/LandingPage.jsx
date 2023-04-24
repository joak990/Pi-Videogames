import React from 'react'
import  style from './landingpage.module.css'

function LandingPage() {
  return (
    <div className={style.containerlogin}>
      <a href='/home' className={style.loginbutton}>Login</a>
    </div>
  )
}

export default LandingPage
