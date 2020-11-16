import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search'
import Immobile from './pages/Immobile'
import About from './pages/About'
import Adm from './pages/Adm'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Update from './pages/Update';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" component={Search}/>
                <Route path="/apartments/:id" component={Immobile}/>
                <Route path="/about" component={About}/>
                <Route path="/adm" component={Adm}/>
                <Route path="/update/:id" component={Update}/>
                <Route path="/register" component={Register}/>
                <Route path="/contact/:id" component={Contact}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
            </Switch>

        </BrowserRouter>
    );
}