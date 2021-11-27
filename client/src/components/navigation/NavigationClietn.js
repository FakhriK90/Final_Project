/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {  useSelector } from 'react-redux'
import photo from './info Store.png'
import AccountMenu from './AccountMenu'
import NotLogged from './NotLogged'


const NavigationClient = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth)
    return (
        <div>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="btnt" href="https://bulma.io">
            <img src={photo} width={80} height={28} alt="" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isAuth? <AccountMenu/> :<NotLogged/>}
                
              </div>
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default NavigationClient
