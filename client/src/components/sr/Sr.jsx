import React from 'react';
import axios from 'axios';
import Profile from './Profile.jsx'
import Search from './Search.jsx'
import MostPlayedChamps from './mostPlayedChamps.jsx';

import Welcome from '../Welcome.jsx';
import Button from 'react-bootstrap/Button';

//https://stackoverflow.com/questions/45992682/calling-functions-after-state-change-occurs-in-reactjs
//right now only works with NA accounts
//can set up a drop down menu for user to select region

class Sr extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      currentProfile: [],
      encyptedId: null,
      currentChamps: [],
      rankData: [],
      goHome: false,
      profileData:{}
    }
    this.goHome = this.goHome.bind(this);
    this.searchForSummoner = this.searchForSummoner.bind(this);
  }

  searchForSummoner(summoner){

    axios.get(`/sr/${summoner}`,{params: {toSearch: summoner}})
    .then((res)=>{

      this.setState({
        profileData:res.data,
        loaded:true
      },()=>console.log(this.state.profileData))
    })
    .catch((err)=>{
      console.error('Error Retrieving Profile Data',err);
    })

  }

  goHome(){
    console.log('Home')
    this.setState({
      goHome: true
    })
  }

  render() {

    let {loaded} = this.state;
    let {goHome} = this.state;

    if(goHome){
      return (
        <Welcome />
      );
    } else if(!loaded){
      return (

        <div className="sr">
             <h3 style={{color:"rgb(56, 182, 255)"}}>Solo Duo Stats</h3>
             <Button variant="secondary" onClick={this.goHome}>Home</Button>
          <nav className="nav">
            <Search handleSearchChange={this.searchForSummoner} />
          </nav>

          <div style={{color:"rgb(56, 182, 255)",textAlign:"center"}}>
            <h2>Type in any League Of Legends Summoner Name and click Search</h2>
            <h2>This is not case sensitive and spaces do not matter</h2>
            <h3>c9zven = C9Zven = C9 Zven</h3>
          </div>

        </div>
      );
    } else if(loaded){
      console.log('Loaded!!!!!!!!!!!!')
      return (
        <div className="sr">
             <h3 style={{color:"rgb(56, 182, 255)"}}>Solo Duo Stats</h3>
             <Button variant="secondary" onClick={this.goHome}>Home</Button>
          <nav className="nav" style={{textAlign:"center"}}>
            <Search handleSearchChange={this.searchForSummoner} />
          </nav>

          <div className ='prof'>
            <Profile profile={this.state.profileData}  />
            <MostPlayedChamps champs={this.state.profileData.champData}/>
          </div>

        </div>
      );
    }
  };

}

export default Sr;

