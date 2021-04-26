import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './views/mainPage';

const AnotherPage = () => <h1>Another Page</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/another-page/">Another Page</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/another-page/" component={AnotherPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
