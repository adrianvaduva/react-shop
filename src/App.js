import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login'
import About from './pages/About';
import Page404 from './pages/Page404';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/category/:name' component={Category}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/about' component={About}/>
                    <Route path='*' component={Page404}/>
                </Switch>
            </div>
        );
    }
}

export default App;
