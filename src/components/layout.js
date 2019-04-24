/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"

import '../assets/scss/index.scss';

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
          <header class="site-header">
            <input 
              type="checkbox" 
              class="openSideBar" 
              id="openSideBar"
              defaultChecked={this.state.navOpen}
              onChange={this.navChange} />
            <label for="openSideBar" class="toggle site-header__toggle">
              <div class="toggle__bar toggle__bar--top"></div>
              <div class="toggle__bar toggle__bar--middle"></div>
              <div class="toggle__bar toggle__bar--bottom"></div>
            </label>
            <h1 class="site-header__title">Slave Ship Leusden</h1>
          </header>
          <nav class="site-nav">
            <div class="site-nav__inner">
              <ul>
                <li>Home</li>
                <li>Blog</li>
              </ul>
            </div>
          </nav>
          <div class="content">
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
