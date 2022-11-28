import React from 'react'
// import './App.css';

import Nav from './Components/Nav'
import Footer from './Components/Footer';
import Home from './Components/Pages/Home/Home';
import Company from './Components/Pages/Company/Company';
import Services from './Components/Pages/Services/Services';
import Projects from './Components/Pages/Projects/Projects';
import Contacts from './Components/Pages/contacts/Contacts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />


        <Switch>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>



        <Footer />
      </Router>

    </div>
  );
}

export default App;
