import React from 'react'
import TwitterLogo from '../../assets/img/twitter-logo.png'

import './Header.scss'

const Header = () => {
  return (
    <div
      className='header'
    >
      <img src={TwitterLogo} alt='Logo Twitter' />
      <h1>Simulador de Tweets</h1>
    </div>
  )
}

export default Header