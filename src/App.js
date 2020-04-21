import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import NoMatch from './pages/NoMatch'

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* 路由的规则 */}
        <Switch>
          <Redirect exact from="/" to="home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/map" component={Map}></Route>
          <Route path="/city" component={City}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App
