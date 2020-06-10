import React from 'react';
import RIOT_API_KEY from '../../rito.js';
import Button from 'react-bootstrap/Button';
import Sr from './sr/Sr.jsx';
import Tft from './tft/Tft.jsx';

class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      module: ""
    }

    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(e){
    this.setState({
      module: e.target.value
    })
  }

  render(){
    if(this.state.module === "sr"){
      return(
        <div className="lol-sr">

        <Sr RIOT_API_KEY={RIOT_API_KEY}/>

      </div>
      )
    } else if(this.state.module === "tft"){
      return(
        <div className="lol-tft">
          <Tft />
        </div>
      )
    } else {
      return (
        <div>
          <h1>TheLolStats</h1>
          <h1 style={{textAlign:"center"}}>Welcome!</h1>
          <h2 style={{textAlign:"center",color:"rgb(56, 182, 255)"}}>Choose A Game Mode!</h2>

          <div style={{textAlign:"center"}} className="home-buttons-holder">
            <div className="sr-sd-holder" >
              <Button variant="primary" value="sr" onClick={this.changeDisplay} size="lg">Summoner's Rift: Solo Duo</Button>
            </div>

            <div className="tft-button" style={{paddingTop:"1%"}}>
              <Button variant="success" value="tft" onClick={this.changeDisplay} size="lg">      Tft       </Button>
            </div>
          </div>

        </div>
      )
    }
  }
}

export default Welcome