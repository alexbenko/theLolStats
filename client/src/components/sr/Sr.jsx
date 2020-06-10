import React from 'react';
import Profile from './Profile.jsx'
import Search from './Search.jsx'
import MostPlayedChamps from './mostPlayedChamps.jsx';
import searchForProfile from './searchProfile.js';
import searchForChamps from './searchChamps.js';
import getRank from './getRank.js';
import Welcome from '../Welcome.jsx';
import Button from 'react-bootstrap/Button';

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
      goHome: false
    }
    this.goHome = this.goHome.bind(this);
  }

  getProfile(search){
    let searchObj = {
      key : this.props.RIOT_API_KEY,
      search: search
    };

    //https://stackoverflow.com/questions/45992682/calling-functions-after-state-change-occurs-in-reactjs
    searchForProfile (searchObj, (profile) =>
      this.setState({
        loded:true,
        currentProfile: profile

      }, () =>{
        this.rank()
        })
    );

  }

  rank(){
    getRank ({encryptedId: this.state.currentProfile["id"], key: this.props.RIOT_API_KEY}, (rank) =>{
      this.setState({
        rankData: rank
        }, () => {
          searchForChamps ({encryptedId: this.state.currentProfile["id"], key: this.props.RIOT_API_KEY}, (champData) =>
             this.setState({
              currentChamps: champData,
              loaded: true
             })
          );

      })
    });
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
            <Search handleSearchChange={this.getProfile.bind(this)} />
          </nav>

          <div>
            <h2 style={{textAlign:"center"}}>Type in any League Of Legends Username and click Search</h2>
          </div>

        </div>
      );
    } else if(loaded){
      return (
        <div className="sr">
             <h3 style={{color:"rgb(56, 182, 255)"}}>Solo Duo Stats</h3>
             <Button variant="secondary" onClick={this.goHome}>Home</Button>
          <nav className="nav" style={{textAlign:"center"}}>
            <Search handleSearchChange={this.getProfile.bind(this)} />
          </nav>

          <div className ='prof'>
            <Profile profile={this.state.currentProfile} rank={this.state.rankData} />
            <MostPlayedChamps champs={this.state.currentChamps}/>
          </div>

        </div>
      );
    }
  };

}

export default Sr;

