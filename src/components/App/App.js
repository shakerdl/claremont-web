import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../../routes'
import {NavbarTop} from '../navbars/navbar/navbar'
import { NavbarBotttom } from '../navbars/navbar-bottom/navbar-bottom'
const App = () => {
  return (
    <Fragment>
      <NavbarTop />
      <NavbarBotttom />
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
      <footer>Footer</footer>
    </Fragment>
  )
}

// ill add it to the navbar 
/* <header>header</header>
 */

export default App