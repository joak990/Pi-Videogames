import React from 'react'
import image from '../../src/images/error-404.jpg'
 import style from '../components/notfound.module.css'
function NotFound() {
  return (
    <div>
      <div className={style.containerNotFound}>
        
        <img className={style.notFound} src={image} alt="" />
      </div>
    </div>
  )
}

export default NotFound
