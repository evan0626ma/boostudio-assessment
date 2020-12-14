import React from 'react';
import './App.css';
import HomePage from './hompepage/homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';




function App () {
  return (
    <Switch>
      <Route exact path component={HomePage}/>
    </Switch>
  );
}

export default App;
