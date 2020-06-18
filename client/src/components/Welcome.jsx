import React from 'react';
import Button from '@material-ui/core/Button';
import Sr from './sr/Sr.jsx';
import Tft from './tft/Tft.jsx';

class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      module: ""
    }

    this.changeDisplayToSr = this.changeDisplayToSr.bind(this);
  }

  changeDisplayToSr(e){
    //issue with material ui where value= doesnt actually do anything
    this.setState({
      module: "sr"
    })
  }

  render(){
    if(this.state.module === "sr"){
      return(
        <div className="lol-sr">
          <Sr/>
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
          <h2 style={{textAlign:"center"}}>Choose A Game Mode!</h2>

          <div style={{textAlign:"center"}} className="home-buttons-holder">
            <div className="sr-sd-holder" >
              <Button variant="contained" color="primary" size="large" value="sr" onClick={this.changeDisplayToSr} style={{backgroundColor:"#A0DZEB"}}><h2 style={{color:"white"}}>Summoner's Rift: Solo Duo</h2></Button>
            </div>


          </div>

        </div>
      )
    }
  }
}

export default Welcome




/*

<div className="tft-button" style={{paddingTop:"1%"}}>
              <Button variant="success" value="tft" onClick={this.changeDisplay} size="lg">      Tft       </Button>
</div>
*/