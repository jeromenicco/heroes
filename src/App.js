import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FinishPage from './components/Finish/FinishPage'
import FormPage from './components/Form/FormPage'
import GamePage from './components/Game/GamePage'
import HomePage from './components/Home/HomePage'
import ResultPage from './components/Result/ResultPage'

import './App.css'


function App(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/FormPage" component={FormPage} />
        <Route path="/GamePage" component={GamePage} />
        <Route path="/FinishPage" component={FinishPage} /> 
        <Route path="/ResultPage" component={ResultPage} /> 
      </Switch>
     
    </div>
  );
}

export default App;
