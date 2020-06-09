import React from 'react';
import getChampionName from './getChampionName.jsx';


let MostPlayedChamps = ({champs}) => {
  return (
  <div className="everything">
      <h3>Most Played Champs</h3>
    <div className="champList">

      {champs.map((champ,i) => {

        return (
          <div className="champions-container" key={i}>
            {/*TODO Figure out a way to remove ' from champ names like Cho'Gath so it displays image correctly */}
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/champion/${getChampionName(champ["championId"])}.png`}/>
            <h3>{getChampionName(champ["championId"])}</h3>
            <h3>Mastery Points: {champ["championPoints"]}</h3>
          </div>
        );

      })}
    </div>
    </div>
  );
};

export default MostPlayedChamps;