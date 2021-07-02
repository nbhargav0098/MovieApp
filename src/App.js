import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import DisplaySearchMovies from './components/DisplaySearchMovies'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <ProtectedRoute exact path="/movies/:id" component={Movies} />
      <ProtectedRoute
        exact
        path="/search/:movies"
        component={DisplaySearchMovies}
      />
      <ProtectedRoute exact path="/Profile" component={Profile} />
    </Switch>
  </BrowserRouter>
)
export default App
