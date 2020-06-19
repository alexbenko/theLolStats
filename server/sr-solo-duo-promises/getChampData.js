const axios = require('axios');

const getChampData = (encryptedId,key) =>{

  return new Promise ((resolve, reject)=>{
    let target = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedId}?api_key=${key}`;

    axios.get(target)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        console.error('Error from getChampData');
        reject(new Error(error.response.status))
      });
  })
};

module.exports = getChampData;