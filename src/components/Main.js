import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Videos from '../containers/Videos';
import Me from './Me';
import Contact from './Contact';

const Main = () => {
    return (
        <main>
            <Switch>
                <Redirect exact path="/" to="/films"/>
                <Route exact path='/' component={Videos}/>                
                <Route exact path='/me' component={Me}/>
                <Route exact path='/contact' component={Contact}/>
                <Route path='/:cat' component={Videos}/>
            </Switch>
        </main>
    )
}

export default Main;