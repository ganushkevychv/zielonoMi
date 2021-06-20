import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Menu from '../src/components/Menu'
import About from '../src/pages/About';
import './App.css';

function App() {
  return (
     <Router>
    <div className="App">
    <Menu/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/About" component={About}/>
      {/*<Route path="/Contacts" component={Contacts}/>
    <Route path="/FamilyGallery" component={FamilyGallery}/> */}

    </Switch>
    </div>
    </Router>
  );
}

export default App;
