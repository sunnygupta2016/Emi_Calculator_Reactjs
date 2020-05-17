import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Frontpage from './Components/frontend/frontpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
     <Route exact path={'/'} component={Frontpage} />
     </Router>
  );
}

export default App;
