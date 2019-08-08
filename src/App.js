import React from 'react';
import 'milligram';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home.js';
import CardsList from './pages/CardsList.js';
import CardDetails from './pages/CardDetails.js';
import NotFound from './pages/NotFound.js';
import Navbar from './components/Navbar.js'
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Magic The Gathering</h1>
        <Navbar />
      </header>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/cards' exact component={CardsList}/>
        <Route path='/cards/:id' exact component={CardDetails}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
