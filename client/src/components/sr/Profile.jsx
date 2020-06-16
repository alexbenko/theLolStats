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
        <h2 style={{paddingTop:"3%"}}>On A Win Streak</h2>
      </div>
    )
  }
}

let style = {
  paddingLeft:"27%",
  paddingBottom:"2%",
  fontSize:"10vw"
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
        <div className="profile-data" style={{fontSize:"1.8vw",paddingRight:"15%",whiteSpace: "nowrap",overflow: "hidden"}}>
          <p style={{paddingBottom:"4.5%"}}>{`Level: ${profile.summonerLevel}`}</p>
          <p style={{paddingBottom:"4.5%"}}>Solo-Duo Rank:{profile.rank}</p>
          <p style={{paddingBottom:"4.5%"}}>Total Wins This Season:{profile.wins}</p>
          <p>Season Win Rate: {profile.totalWr} %</p>
       </div>
      </Grid>

    </Grid>

  </div>
  )

};



export default Profile