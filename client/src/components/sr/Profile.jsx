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
        <h2 style={{paddingTop:"2.5%"}}>On A Win Streak</h2>
      </div>
    )
  }
}

let style = {
  paddingLeft:"25%",
  paddingBottom:"2%",
  fontSize:"10vw"
}

let Profile = ({profile}) =>{
  return (
    <div className="prof" style={style}>
    <h1>{`${profile.name}`}</h1>

    <Avatar src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${profile.profileIconId}.png`} style={{width:"10em", height:"10em"}}/>

    <div style={{display: "flex", flexDirection:"row",paddingBottom:"3%"}}>
      {onHotstreak(profile)}
    </div>
    <div className="profile-data" style={{fontSize:"2vw",paddingRight:"15%"}}>
      <p>{`Level: ${profile.summonerLevel}`}</p>
      <p>Solo-Duo Rank:{profile.rank}</p>
      <p>Total Wins This Season:{profile.wins}</p>
      <p>Season Win Rate: {profile.totalWr} %</p>
    </div>
  </div>
  )

};



export default Profile