//converts the championid to a champion name
import champInfo from './championId.js';

let getChampionName = (idPair) =>{
  let champName = champInfo[idPair];

  return champName
};

export default getChampionName;