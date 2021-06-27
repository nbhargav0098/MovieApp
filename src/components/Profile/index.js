import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Profile = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('request_token')
    history.replace('/')
  }
  return (
    <>
      <div className="profile-headers">
        <div className="profile-content-container">
          <div className="profile-start-part">
            <img
              className="movie-logo"
              src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624196500/Group_7399_cjjn5h.png"
              alt="movielogo"
            />
            <ul className="profile-nav-bar-links">
              <Link to="/" className="profile-nav-link">
                Home
              </Link>
              <Link to="/MyList" className="profile-nav-link">
                MyList
              </Link>
            </ul>
          </div>
          <div className="profile-end-part">
            <ul className="profile-end-part-list">
              <Link to="/Profile">
                <img
                  src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624196473/Avatar_gmrmra.png"
                  className="profile-img"
                  alt="profileImg"
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="profile-details-container">
        <div>
          <h1 className="Profile-heading">Account</h1>
          <hr
            style={{marginRight: '60px', marginTop: '20px', color: 'black'}}
          />
        </div>
        <div className="account-details">
          <p className="membership-details">Member Ship</p>
          <div className="person-login-info">
            <p className="person">Bhargav</p>
            <p className="acc-password">
              Password : <span>***********</span>
            </p>
          </div>
        </div>
        <div>
          <hr
            style={{marginRight: '60px', marginTop: '20px', color: 'black'}}
          />
        </div>
        <div className="account-details">
          <p className="membership-details">Plan Details</p>
          <div className="person-login-info">
            <p className="membership-type">Premium</p>
          </div>
        </div>
        <div className="button-container">
          <button type="button" className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Profile)
