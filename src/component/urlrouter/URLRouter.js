import React, { Component } from 'react';
import { Switch,Route} from 'react-router-dom';
import {FormComponent} from '../pages/';
import HomePage from '../homepage/HomePage';
class URLRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/form" component={FormComponent}></Route>
                </Switch>
            </div>
        );
    }
}

export default URLRouter;