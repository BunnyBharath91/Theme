import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
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
              alt="home"
              className="home-img"
              src={`https://assets.ccbp.in/frontend/react-js/home-${
                isDarkTheme ? 'dark' : 'light'
              }-img.png`}
            />
            <h1 className="home-heading">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
