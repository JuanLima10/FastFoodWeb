import React from 'react'

import { Router, Switch, Route } from 'react-router'
import { history } from '../history'

import Dashboard from '../pages/Dashboard/Dashboard'
import Register from '../pages/Register/Register'
import NotFound from '../components/NotFound'
import Loja from '../pages/Loja/Loja'
import Edit from '../pages/Edit/Edit'


const Routes = () => (
    <Router history={ history }>
        <Switch>
            <Route component={ Dashboard } exact path="/"/>
            <Route component={ Loja } exact path="/Loja/:id"/>
            <Route component={ Edit } exact path="/Edit/:id"/>
            <Route component={ Register } exact path="/Register"/>
            
            <Route component={ NotFound }/>
        </Switch>
    </Router>
)

export default Routes