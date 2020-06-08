import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import RIOT_API_KEY from '../rito.js';


ReactDOM.render(<App RIOT_API_KEY={RIOT_API_KEY}/>,document.getElementById('app'));

