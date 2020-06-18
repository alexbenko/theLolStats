import React from 'react';
import axios from 'axios';
import Profile from './Profile.jsx'
import Search from './Search.jsx'
import MostPlayedChamps from './MostPlayedChamps.jsx';
import Welcome from '../Welcome.jsx';
import Button from '@material-ui/core/Button';


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
        loaded: true
      })
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

    let {loaded,goHome} = this.state;

    let style= {};
    style.profile = {
      color:"#05386b",
      fontSize:"2vw",
    }

    if(goHome){
      return (
        <Welcome />
      );
    } else if(!loaded){
      return (

        <div className="sr">
             <h3 style={{fontSize:"3.5vw"}}>Solo Duo Stats</h3>
             <Button color="secondary" variant="contained" onClick={this.goHome}>Home</Button>
          <nav className="nav">
            <Search handleSearchChange={this.searchForSummoner} />
          </nav>

          <div style={{textAlign:"center"}}>
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
             <h2>Solo Duo Stats</h2>
             <Button color="secondary" variant="contained" onClick={this.goHome}>Home</Button>
          <nav className="nav" >
            <Search handleSearchChange={this.searchForSummoner} />
          </nav>

          <div className="profile-holder" style={{paddingLeft:"15%"}}>
            <Profile profile={this.state.profileData}  />
          </div>

          <MostPlayedChamps champs={this.state.profileData.champData}/>
        </div>
      );
    }
  };

}

export default Sr;

