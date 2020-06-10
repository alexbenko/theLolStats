import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//<img src={`https://rankedimages.s3-us-west-2.amazonaws.com/Emblem_${capitalizeFirstLetter((props.rank[0].tier).toLowerCase())}.png`}
//commenting this image out until I have i redo the image hosting

const checkIfUserHasRank = (rankInfo) =>{
  if(rankInfo.length === 0 ) {
    return (' Unranked');
  } else {
    return (rankInfo[0].tier + ' ' + rankInfo[0].rank);
  }
};

const checkWins = (rankInfo) =>{
  if(rankInfo.length === 0) {
    return (' No Ranked Data Available For this Season')
  } else {
    return (rankInfo[0].wins)
  }
};


let Profile = (props) => (
  <div className="prof">
    <h3>{`Summoner: ${props.profile.name}`}</h3>
      <Avatar src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${props.profile.profileIconId}.png`} style={{width:"10em", height:"10em"}}/>
    <h3>{`Level: ${props.profile.summonerLevel}`}</h3>

    <h3>Solo-Duo Rank:{`${checkIfUserHasRank(props.rank)}`}</h3>
    <h3>Total Wins This Season:{` ${checkWins(props.rank)}`}</h3>
  </div>

);


export default Profile