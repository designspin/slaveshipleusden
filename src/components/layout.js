import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../assets/scss/index.scss'
import Ship from '../assets/svg/ship.svg'

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
              <small className="site-header__desc">A Story of Mutiny, Shipwreck and Murder</small>
            </div>
          </header>
          <nav id="site-nav" className="site-nav">
            <div className="site-nav__inner">
              <ul className="site-nav__items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page-2">Blog</Link></li>
              </ul>
            </div>
          </nav>
          <div className="content">
            { children }
          </div>
        </div>
      </div>
    );
  }
} 

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
