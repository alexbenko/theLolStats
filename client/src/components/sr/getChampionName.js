//converts the championid to a champion name
import champInfo from './championId.js';
//const champInfo = require('./championId.js');
const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let getChampionName = (idPair) =>{
  let champName = champInfo[idPair];

  if(champName === "Nunu & Willump"){
    return "Nunu";
  } else if(champName === "Rek\'Sai"){
    return "RekSai";
  } else if(champName === "LeBlanc"){
    return "Leblanc"
  } else if(champName === "Dr. Mundo"){
    return "DrMundo";
  } else if(champName === "Kog\'Maw"){
    return "KogMaw";
  }else if(champName === "Wukong"){
    return "MonkeyKing";
  }else if(champName.includes("'")){
    //champName.replace("'", "");
    let regex = /\'/;
    let newChampName = champName.replace(regex,"").toLowerCase();

    return capitalizeFirstLetter(newChampName);
  } else if(champName.includes(" ")) {
    let regex = / /;
    let newChampName = champName.replace(" ","");

    return newChampName;
  } else {
    return champName;
  }

};

getChampionName('64');

export default getChampionName;