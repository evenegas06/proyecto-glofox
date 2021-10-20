import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/custom.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (

    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/about" component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>

  );
}

export default App;
