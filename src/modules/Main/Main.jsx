import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import './Main.scss';
// --- components
import Register from './Register/Register';

export default function Main() {
    return (
        <div className='Main'>
            <Switch>
                <Route path='/register' component={Register} />
                <Route path='/users' />
                <Route path='/tree' />

                <Redirect to='/register' />
            </Switch>
        </div>
    )
}
