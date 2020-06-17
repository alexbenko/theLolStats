import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Grid from '@material-ui/core/Grid';

const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const onHotstreak = (profile) =>{
  if(profile.hotStreak){
    return (
      <div style={{display: "flex", flexDirection:"row"}}>
        <WhatshotIcon style={{ color: "red",fontSize: "50" }}/>
        <h1 style={{paddingTop:"3%"}}>On A Win Streak</h1>
      </div>
    )
  }
}

let style = {
  paddingLeft:"30%",
  paddingBottom:"2%"
}

let Profile = ({profile}) =>{
  return (
    <div className="prof" style={style}>
       <Grid container direction="row" spacing={10}>
        <Grid item>
          <h1>{`${profile.name}`}</h1>
          <Avatar src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${profile.profileIconId}.png`} style={{width:"10em", height:"10em"}}/>
          {onHotstreak(profile)}

      </Grid>

      <Grid item>
        <div className="profile-data" style={{whiteSpace: "nowrap",overflow: "hidden"}}>
          <h1 style={{paddingBottom:"7%"}}>{`Level: ${profile.summonerLevel}`}</h1>
          <h1 style={{paddingBottom:"7%"}}>Solo-Duo Rank:{profile.rank}</h1>
          <h1 style={{paddingBottom:"7%"}}>Total Wins This Season:{profile.wins}</h1>
          <h1>Season Win Rate: {profile.totalWr} %</h1>
       </div>
      </Grid>

    </Grid>

  </div>
  )

};



export default Profile