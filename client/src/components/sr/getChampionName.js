//converts the championid to a champion name
import champInfo from './championId.js';

const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//this is necessary so my website can display the proper image for each champion
let getChampionName = (idPair) =>{
  let champName = champInfo[idPair];

  //edgecases
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


export default getChampionName;