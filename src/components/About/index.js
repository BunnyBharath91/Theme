import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
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
              alt="about"
              className="home-img"
              src={`https://assets.ccbp.in/frontend/react-js/about-${
                isDarkTheme ? 'dark' : 'light'
              }-img.png`}
            />
            <h1 className="home-heading">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
