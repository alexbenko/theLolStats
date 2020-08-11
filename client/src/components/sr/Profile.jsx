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
        <WhatshotIcon style={{ color: "red",fontSize: "2.5vw" }}/>
        <h1 style={{paddingTop:"3%", fontSize:"2.5vw"}}>On A Win Streak</h1>
      </div>
    )
  }
}

let style = {
  paddingBottom:"2%",
  border:"10px outset #7d8485",
  backgroundColor:"#328CC1",
  height:"auto",
  width:"85%"
}

let Profile = ({profile}) =>{
  return (

    <div className="prof" style={style}>
       <Grid container direction="row">
        <Grid item >
          <h1 style={{fontSize:"2.9vw"}}>{`${profile.name}`}</h1>
          <Avatar src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${profile.profileIconId}.png`} style={{width:"13vw",height:"13vw"}}/>
          {onHotstreak(profile)}

      </Grid>


      <Grid item >
        <div className="profile-data" style={{whiteSpace: "nowrap",paddingLeft:"15%",paddingTop:"2%"}}>
          <h1 style={{paddingBottom:"6%",fontSize:"2.5vw"}}>{`Level: ${profile.summonerLevel}`}</h1>
          <h1 style={{paddingBottom:"6%",fontSize:"2.5vw"}}>Solo-Duo Rank:{profile.rank}</h1>
          <h1 style={{paddingBottom:"6%",fontSize:"2.5vw"}}>Total Wins This Season:{profile.wins}</h1>
          <h1 style={{fontSize:"2.5vw"}}>Season Win Rate: {profile.totalWr} %</h1>
       </div>
      </Grid>


    </Grid>

  </div>

  )

};



export default Profile