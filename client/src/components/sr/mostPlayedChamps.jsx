import React from 'react';
import getChampionName from './getChampionName.js';
import championId from './championId.js';
import Grid from '@material-ui/core/Grid';

//<Grid container direction="column" justify="center"></Grid>

let champName = (id) =>{
  let champ = championId[id];
  return champ;
};

let champsStyle={
  fontSize:"large",
  border:"10px outset #7d8485",
  backgroundColor:"#328CC1"
};

let MostPlayedChamps = ({champs}) => {
  return (

    <div className="champ-data-holder" style={{width:"50%",textAlign:"center"}}>
      <Grid container direction="column">
        <h3>Most Played Champs</h3>
          {champs.map((champ,i) => {

          return (
            <Grid item key={i}>
              <div className="champions-container" style={champsStyle}>
                <img src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${getChampionName(champ["championId"])}.png`}/>
                <h3>{champName(champ["championId"])}</h3>
                <h3>Mastery Points: {champ["championPoints"]}</h3>
              </div>
            </Grid>
        );

      })}
      </Grid>


    </div>
  );
};

export default MostPlayedChamps;