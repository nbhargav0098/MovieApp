import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Profile from './components/Profile'
import DisplaySearchMovies from './components/DisplaySearchMovies'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/popular" component={Popular} />
      <Route exact path="/movies/:id" component={Movies} />
      <Route exact path="/search/:movies" component={DisplaySearchMovies} />
      <Route exact path="/Profile" component={Profile} />
    </Switch>
  </BrowserRouter>
)
export default App
