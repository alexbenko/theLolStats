import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//<img src={`https://rankedimages.s3-us-west-2.amazonaws.com/Emblem_${capitalizeFirstLetter((props.rank[0].tier).toLowerCase())}.png`}
//commenting this image out until I have i redo the image hosting

let Profile = ({profile}) => (

  <div className="prof">
    <h3>{`Summoner: ${profile.name}`}</h3>
      <Avatar src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${profile.profileIconId}.png`} style={{width:"10em", height:"10em"}}/>
    <h3>{`Level: ${profile.summonerLevel}`}</h3>

    <h3>Solo-Duo Rank:{profile.rank}</h3>
    <h3>Total Wins This Season:{profile.wins}</h3>
  </div>

);


export default Profile