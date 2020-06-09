import React from 'react';
var capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var Profile = (props) => (

  <div className="prof">
    <h3>{`Summoner: ${props.profile.name}`}</h3>
    <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${props.profile.profileIconId}.png`} className='rank'/>
    <h3>{`Level: ${props.profile.summonerLevel}`}</h3>
    <img src={`https://rankedimages.s3-us-west-2.amazonaws.com/Emblem_${capitalizeFirstLetter((props.rank[0].tier).toLowerCase())}.png`} className='rank'/>
    {console.log(props.rank)}
    <h3>Solo-Duo Rank:{`${props.rank[0].tier + ' ' + props.rank[0].rank}`}</h3>
    <h3>{`Total Wins This Season: ${props.rank[0].wins}`}</h3>
  </div>

);


export default Profile