import {IconContext} from 'react-icons'
import {GrGoogle, GrTwitter, GrInstagram, GrYoutube} from 'react-icons/gr'
import Header from '../Header'
import OriginalsRow from '../OriginalsRow'
import TrendingRow from '../TrendingRow'
import TopRatedRow from '../TopRatedRow'
import Banner from '../Banner'
import './index.css'

const HomePage = () => (
  <div className="home-page-bg-container">
    <Header />
    <Banner />
    <div className="content-type-container">
      <div className="main-display">
        <TrendingRow />
      </div>
      <div className="main-display">
        <TopRatedRow />
      </div>
      <div className="main-display">
        <OriginalsRow />
      </div>
      <div className="footer-container">
        <div className="icons">
          <IconContext.Provider
            value={{style: {fontSize: '14px', color: 'white'}}}
          >
            <GrGoogle />
          </IconContext.Provider>
        </div>
        <div className="icons">
          <IconContext.Provider
            value={{style: {fontSize: '15px', color: 'white'}}}
          >
            <GrTwitter />
          </IconContext.Provider>
        </div>
        <div className="icons">
          <IconContext.Provider
            value={{style: {fontSize: '15px', color: 'white'}}}
          >
            <GrInstagram />
          </IconContext.Provider>
        </div>
        <div className="icons">
          <IconContext.Provider
            value={{style: {fontSize: '15px', color: 'white'}}}
          >
            <GrYoutube />
          </IconContext.Provider>
        </div>
      </div>
      <h1 className="contact">Contact Us</h1>
    </div>
  </div>
)

export default HomePage
