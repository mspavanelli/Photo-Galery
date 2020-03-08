import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Galery from './pages/Galery'
import Picture from './pages/Picture'
import List from './pages/List'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Galery} />
      <Route path="/image/:id" component={Picture} />
      <Route path="/list" component={List} />
    </Switch>
  </BrowserRouter>
)

export default Routes
