import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Galery from './pages/Galery'
import Picture from './pages/Picture'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Galery} />
      <Route path="/image/:id" component={Picture} />
    </Switch>
  </BrowserRouter>
)

export default Routes
