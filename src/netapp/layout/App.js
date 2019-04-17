import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import login from '../pages/login';
import home from '../pages/home';

function BasicExample() {
  return (
    <Router>
      <div>
        
        <Route exact path="/" component={login} />

        <Route path="/login" component={login} />
        <Route path="/home" component={home} />
        
       
      </div>
    </Router>
  );
}








export default BasicExample;
