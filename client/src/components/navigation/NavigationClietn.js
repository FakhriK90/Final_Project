/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { logout } from '../../redux/actions/actions'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { purple } from '@mui/material/colors';
import photo from './info Store.png'
import AccountMenu from './AccountMenu'
import NotLogged from './NotLogged'


const NavigationClient = () => {
  const history=useHistory()
  const dispatch = useDispatch()
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
          <div className="navbar-start">
            <a className="btnt" >
              Home
            </a>
            <a className="btnt" href="/profile" >
              Profile
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="btnt" >
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
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
