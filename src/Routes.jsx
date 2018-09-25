import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UsersList from './components/users-list'
import ChangeName from './components/change-name'

export default () => (
    <Switch>
        <Route exact path='/' component={UsersList} />
        <Route exact path='/users/:id' component={ChangeName} />
    </Switch>
)