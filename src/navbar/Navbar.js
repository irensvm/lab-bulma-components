import React from 'react'
//import CoolButton from './coolbutton/CoolButton'


export default function Navbar() {
    return (
      <div className="navbar">
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
            <p className="control">
                  <a className="bd-tw-button button is-rounded is-light" >
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Home</span>
                  </a>
                </p>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button is-rounded is-light" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>
                      Login
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" >
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Signup</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
      </nav>
    </div>
    )
}



