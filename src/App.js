import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
