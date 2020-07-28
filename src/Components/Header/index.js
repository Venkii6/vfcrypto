import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import AppHeader from './AppHeader'
import CurrencyHeader from './CurrencyHeader'


const Header = styled.header`
    padding: 1em;
`

export default () => (
    <Header>
        <Switch>
            <Route path="/coin/:id" component={CurrencyHeader} />
            <Route component={AppHeader} />
        </Switch>
    </Header>
)