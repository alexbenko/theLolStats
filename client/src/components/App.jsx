import React from 'react';
import Sr from './sr/Sr.jsx';
import Tft from './tft/Tft.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HashRouter } from 'react-router-dom'
import RIOT_API_KEY from '../../rito.js';


class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Sr RIOT_API_KEY={RIOT_API_KEY}/>
      </div>
    );
  }
}

export default App;