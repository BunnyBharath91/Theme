import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      return (
        <div className="home-container">
          <Navbar />
          <div
            className={`home-bottom-container ${isDarkTheme && 'dark-theme'}`}
          >
            <img
              alt="not found"
              className="home-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1 className="not-found-heading">Lost Your Way?</h1>
            <p className="not-found-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
