import {useState} from 'react'
import {Link} from 'react-router-dom'
import {IconContext} from 'react-icons'
import {CgPlayList} from 'react-icons/cg'
import Search from '../Search'
import './index.css'

function Header() {
  const [showLinks, setShowLinks] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={`headers ${navbar && 'dark-header'}`}>
      <div className="content-container">
        <div className="start-part">
          <img
            className="movie-logo"
            src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624196500/Group_7399_cjjn5h.png"
            alt="movielogo"
          />
          <ul className="nav-bar-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/popular" className="nav-link">
              Popular
            </Link>
          </ul>
        </div>
        <div className="end-part">
          <ul className="end-part-list">
            <Search />
            <div className="accounts">
              <Link to="/Profile">
                <img
                  src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624196473/Avatar_gmrmra.png"
                  className="header-profile-img "
                  alt="profileImg"
                />
              </Link>
            </div>
            <div className="add-icon">
              {showLinks && (
                <div className="new-nav-bar-links">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  <Link to="/popular" className="nav-link">
                    Popular
                  </Link>
                  <Link to="/Profile" className="nav-link">
                    Account
                  </Link>
                </div>
              )}

              <IconContext.Provider
                value={{style: {fontSize: '35px', color: 'white'}}}
              >
                <CgPlayList onClick={() => setShowLinks(!showLinks)} />
              </IconContext.Provider>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
