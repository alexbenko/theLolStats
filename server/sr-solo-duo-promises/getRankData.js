const axios = require('axios');

const getRankData = (encryptedId,key) =>{

  return new Promise ((resolve, reject)=>{
    let target = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedId}?api_key=${key}`;

    axios.get( target)
    .then((res) =>{
      resolve(res.data);
    })
    .catch((err)=>{
      console.error("Error from getRankData:",err);
      return reject(err);
    })
  })
};

module.exports = getRankData;