import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)

      return (
        <nav className={`nav-bar-container ${isDarkTheme && 'dark-nav-bar'}`}>
          <img
            alt="website logo"
            className="company-logo"
            src={`https://assets.ccbp.in/frontend/react-js/website-logo-${
              isDarkTheme ? 'dark' : 'light'
            }-theme-img.png`}
          />
          <ul className="nav-menu-list">
            <Link to="/" className="link-item">
              <li className="nav-menu-item">Home</li>
            </Link>
            <Link to="/about" className="link-item">
              <li className="nav-menu-item">About</li>
            </Link>
          </ul>
          <button type="button" data-testid="theme" className="theme-button">
            <img
              alt="theme"
              className="company-logo"
              src={`https://assets.ccbp.in/frontend/react-js/${
                isDarkTheme ? 'light' : 'dark'
              }-theme-img.png`}
              onClick={toggleTheme}
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
