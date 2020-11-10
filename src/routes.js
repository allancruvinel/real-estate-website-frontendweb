import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search'
import Immobile from './pages/Immobile'
import About from './pages/About'
import Adm from './pages/Adm'
import Register from './pages/Register'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" component={Search}/>
                <Route path="/apartments" component={Immobile}/>
                <Route path="/about" component={About}/>
                <Route path="/adm" component={Adm}/>
                <Route path="/register" component={Register}/>
            </Switch>

        </BrowserRouter>
    );
}