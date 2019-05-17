import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../assets/scss/index.scss'
import Ship from '../assets/svg/ship.svg'
import Form from './contact-form';


class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false
    }

    this.navChange = this.navChange.bind(this);
  }

  navChange(e) {
    this.setState({
      navOpen: e.target.checked
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div id="outer-wrap" className={(this.state.navOpen ? 'nav-open' : '')}>
        <div id="inner-wrap">
          <header className="site-header">
            <input 
              type="checkbox" 
              className="openSideBar" 
              id="openSideBar"
              defaultChecked={this.state.navOpen}
              onChange={this.navChange} />
            <label htmlFor="openSideBar" className="toggle site-header__toggle">
              <div className="toggle__bar toggle__bar--top"></div>
              <div className="toggle__bar toggle__bar--middle"></div>
              <div className="toggle__bar toggle__bar--bottom"></div>
            </label>
            <Ship className="site-header__icon" style={{ width: "3.5em", height: "auto"}} /> 
            <div>
              <h1 className="site-header__title">Slave Ship Leusden</h1>
            </div>
          </header>
          <nav id="site-nav" className="site-nav">
            <div className="site-nav__inner">
              <ul className="site-nav__items">
                <li><Link activeClassName="active" to="/">Home</Link></li>
                <li><Link activeClassName="active" to="/gallery">Gallery</Link></li>
                <li><Link activeClassName="active" to="/blog">Blog</Link></li>
              </ul>
            </div>
          </nav>
          <div className="content">
            { children }
          </div>
          <footer className="site-footer">
            <div className="container">
              <div className="contact">
              <Form />
              </div>
              <div className="social">
                <h4 className="title title--underline">Visit us on our Facebook Page</h4>
                <p>For more frequent updates on our investigation into the Slave Ship Leusden, visit us on our Facebook page.</p>
                
              </div>
            </div>
            <div className="site-footer__copy">
              <div className="container">
                <p>Slave Ship Leusden &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg></div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
} 

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
