import React from 'react';
import Welcome from '../Welcome.jsx';
import Button from 'react-bootstrap/Button';
//future feature is to add info for TFT in a similar way to Summoners Rift
class Tft extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      goHome: false
    }

    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    console.log('Home')
    this.setState({
      goHome: true
    })
  }

  render(){
    let {goHome} = this.state;
    if(goHome) {
      return (
        <Welcome />
      );
    } else {
      return(
        <div className="Tft">
          <h1>TFT</h1>
          <Button variant="secondary" onClick={this.goHome}>Home</Button>

          <h1 style={{textAlign:"center"}}>COMING SOON CHECK BACK AGAIN LATER</h1>
        </div>
      )
    }

  }
}

export default Tft;