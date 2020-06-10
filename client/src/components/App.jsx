import React, { useState } from 'react';
import Sr from './sr/Sr.jsx';
import Tft from './tft/Tft.jsx';
import RIOT_API_KEY from '../../rito.js';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
let App = ()=>{
    return (
      <div className="lol-home">

        <Sr RIOT_API_KEY={RIOT_API_KEY}/>

      </div>
    );

};

export default App;