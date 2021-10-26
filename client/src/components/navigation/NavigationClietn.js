/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { logout } from '../../redux/actions/actions'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { purple } from '@mui/material/colors';


const NavigationClient = () => {
  const history=useHistory()
  const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width={112} height={28} alt="" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
            <a className="navbar-item">
              Profile
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
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
                  <Link to="/loggin">
              <Button basic inverted color='green'>
        Sign in
      </Button>
      </Link>
      <Link to="/signup">
      <Button basic inverted color='purple'>
        Sign up
      </Button>
      </Link>
      <ListItemButton>
              <ListItemIcon>
                <LogoutIcon onClick={()=>{dispatch(logout());;history.push('/')}} fontSize="large" sx={{ color: purple[100] }} />
              </ListItemIcon>
            </ListItemButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default NavigationClient
