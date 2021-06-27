import {Component} from 'react'
import {IconContext} from 'react-icons'
import {GrGoogle, GrTwitter, GrInstagram, GrYoutube} from 'react-icons/gr'
import Header from '../Header'
import PopularMovies from '../PopularMovies'
import './index.css'

class Popular extends Component {
  state = {popularData: [], pageNumber: 0}

  componentDidMount() {
    this.getPopularMovieData()
  }

  getPopularMovieData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a296c915c9f82c25cca95eab8568c3a2&language=en-US&page=${this.pageNumber}`,
    )
    const data = await response.json()
    console.log(data)
    this.setState({popularData: data.results, pageNumber: data.page})
  }

  nextPage = () => {
    this.setState(
      prevState => ({
        pageNumber: prevState.pageNumber + 1,
      }),
      () => this.fetchNweMoviePage(),
    )
  }

  previousPage = () => {
    this.setState(
      prevState => ({
        pageNumber: prevState.pageNumber - 1,
      }),
      () => this.fetchNweMoviePage(),
    )
  }

  fetchNweMoviePage = () => {
    const {pageNumber} = this.state
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a296c915c9f82c25cca95eab8568c3a2&language=en-US&page=${pageNumber}`,
    )
      .then(response => response.json())
      .then(json =>
        this.setState({popularData: json.results, pageNumber: json.page}),
      )
  }

  render() {
    const {popularData, pageNumber} = this.state

    return (
      <div className="popular-movies-bg-container">
        <Header />
        <div className="popular-movie-container">
          <div className="movie-list-container">
            {popularData.map(item => (
              <PopularMovies fetchedData={item} key={item.id} />
            ))}
          </div>
          <div className="page-count-container">
            <img
              src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624346813/Icon_hqtcpn.png"
              alt="prev-icon"
              className="arrow"
              onClick={this.previousPage}
            />
            <h1 className="pages">
              <span>{pageNumber}</span> of <span>20</span>
            </h1>
            <img
              src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624347331/Icon_hulq8z.png"
              alt="nxt-icon"
              className="arrow"
              onClick={this.nextPage}
            />
          </div>
          <div className="popular-page-footer-container">
            <div className="icons">
              <IconContext.Provider
                value={{style: {fontSize: '18px', color: 'white'}}}
              >
                <GrGoogle />
              </IconContext.Provider>
            </div>
            <div className="icons">
              <IconContext.Provider
                value={{style: {fontSize: '20px', color: 'white'}}}
              >
                <GrTwitter />
              </IconContext.Provider>
            </div>
            <div className="icons">
              <IconContext.Provider
                value={{style: {fontSize: '20px', color: 'white'}}}
              >
                <GrInstagram />
              </IconContext.Provider>
            </div>
            <div className="icons">
              <IconContext.Provider
                value={{style: {fontSize: '20px', color: 'white'}}}
              >
                <GrYoutube />
              </IconContext.Provider>
            </div>
          </div>
          <h1 className="contact">Contact Us</h1>
        </div>
      </div>
    )
  }
}
export default Popular
