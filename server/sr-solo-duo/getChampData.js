const axios = require('axios');

const getChampData = (encryptedId,key, cb) =>{
  let proxy = 'https://lolstats-cors-proxy.herokuapp.com/';
  let target = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedId}?api_key=${key}`;

  console.log('Getting Champion Data');
  axios.get(target)
    .then(res => {
      cb(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = getChampData;