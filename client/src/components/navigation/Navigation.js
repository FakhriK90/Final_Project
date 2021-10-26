import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Navigation = () => {
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
              </div>
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navigation
