import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import HomePage from '../HomePage'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route exact path="/" component={HomePage} />
}
export default ProtectedRoute
