import {Link} from 'react-router-dom'
import Search from '../Search'
import './index.css'

function Header() {
  return (
    <div className="headers">
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
            <Link to="/Profile">
              <img
                src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624196473/Avatar_gmrmra.png"
                className="header-profile-img "
                alt="profileImg"
              />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
