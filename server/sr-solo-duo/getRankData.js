const axios = require('axios');
const getRankData = (encryptedId,key,cb) =>{
  let proxy = 'https://lolstats-cors-proxy.herokuapp.com/';
  let target = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedId}?api_key=${key}`;

  console.log("Getting Rank");
  axios.get( target)
  .then((res) =>{

    cb(res.data);
  })
  .catch((err)=>{
    console.error("Error:",err);
  })
};

module.exports = getRankData;