//converts the championid to a champion name
import champInfo from './championId.js';
//const champInfo = require('./championId.js');

let getChampionName = (idPair) =>{
  let champName = champInfo[idPair];

  if(champName.includes("'")){
    //champName.replace("'", "");
    let regex = /\'/;
    let newChampName = champName.replace(regex,"");
    console.log(newChampName);
    return newChampName
  } else if(champName.includes(" ")) {
    let regex = / /;
    let newChampName = champName.replace(" ","");
    console.log(newChampName);
    return newChampName
  } else {
    return champName;
  }

};

getChampionName('64');

export default getChampionName;