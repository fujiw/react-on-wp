import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Posts from './Posts';
import Index from "./Top";



ReactDOM.render((
        <BrowserRouter>
          <Switch>
              <Route path='/' exact component={Index}/>
            <Route path='/posts' component={Posts}/>
          </Switch>
        </BrowserRouter>
    ), document.getElementById('root')
);