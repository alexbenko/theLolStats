import React, { useState } from 'react';
import Sr from './sr/Sr.jsx';
import Tft from './tft/Tft.jsx';
import Welcome from './Welcome.jsx'


class App extends React.Component{
    constructor(props){
      super(props);

    }

    render(){
      return (
        <Welcome />
      )
    }

}

export default App;