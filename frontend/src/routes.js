import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Favorites from './pages/favorites'
import Main from './pages/main'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
    </BrowserRouter>
)

export default Routes