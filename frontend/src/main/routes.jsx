import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';


export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/billingCycle' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)