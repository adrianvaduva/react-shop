import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';
import './utils/utility-classes.css';

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path="/cart" component={Cart}/>
                <Route path='/about' component={About}/>
                <Route path='/category/:categoryName' component={Category}/>
                <Route path='*' component={Page404}/>
            </Switch>
        </div>
    );
}

export default App;