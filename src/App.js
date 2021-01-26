// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Create from './components/Create';
import Index from './components/Index';
import ShowWeather from './components/ShowWeather';

// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
     <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Express App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
                <li className="nav-item"><Link to={'/index'} className="nav-link">List</Link></li>
                <li className="nav-item"><Link to={'/show-weather'} className="nav-link">Show Weather</Link></li>
              </ul>
              <hr />
            </div>
          </nav> <br />
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/index' component={ Index } />
              <Route path='/show-weather' component={ ShowWeather } />
          </Switch>
        </div>
      </Router>
  );
}

export default App;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


