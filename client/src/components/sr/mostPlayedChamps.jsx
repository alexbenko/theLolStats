import React, {Component} from 'react';
import getChampionName from './getChampionName.js';
import getChampionIds from './championId.js';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

let championId = {};

getChampionIds()
.then((champs)=>{
  championId = champs
},()=>console.log(championId))


class MostPlayedChamps extends Component{
  constructor(props){
    super(props);
    this.state = {
      version: "10.15.1"
    }

    this.champName = this.champName.bind(this);
    this.getGameVersion = this.getGameVersion.bind(this);

  }

  champName(id){
    let champ = championId[id];
    return champ;
  }

  async getGameVersion(){
    //async!!
    //returns an array of strings of every version of the game with 0 index being the most current version
    try{
      console.log('Getting Game Version...')
      let versionObj = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');

      return versionObj.data;
    } catch(err){
      console.log(err)
    }
  }

  componentDidMount(){

    this.getGameVersion()
    .then((versions)=>{
      this.setState({
        version: versions[0]
      },()=>console.log(this.state))
    })

  }

  render(){

  let champsStyle={
    fontSize:"large",
    border:"10px outset #7d8485",
    backgroundColor:"#328CC1"
  };

    return (

      <div className="champ-data-holder" style={{width:"50%",textAlign:"center"}}>

        <Grid container direction="column">
          <h3>Most Played Champs</h3>
            {this.props.champs.map((champ,i) => {

            return (
              <Grid item key={i}>
                <div className="champions-container" style={champsStyle}>
                  <img src={`http://ddragon.leagueoflegends.com/cdn/${this.state.version}/img/champion/${getChampionName(champ["championId"])}.png`}/>
                  <h3>{this.champName(champ["championId"])}</h3>
                  <h3>Mastery Points: {champ["championPoints"]}</h3>
                </div>
              </Grid>
          );

        })}
        </Grid>


      </div>
    );

  }

}

export default MostPlayedChamps;