import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PosFrontView from './Components/Pages/FrontSide/PosFrontSide'
import CookView from './Components/Pages/CookSide/CookSide'
export default (
    <Switch>
        <Route exact path='/' component={PosFrontView} />
        <Route exact path='/cookview' component={CookView} />


    </Switch>
)
