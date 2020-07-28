import React from 'react'
import { Route } from "react-router-dom";
import Home from './home'
import Currency from './currency'
import { Switch } from 'react-router-dom'


export default () => (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/coin/:id" component={Currency} />
    </Switch>
)

