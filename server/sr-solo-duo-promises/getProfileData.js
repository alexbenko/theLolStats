const axios = require('axios');

const getProfileData = (search,key) => {

  return new Promise((resolve, reject)=>{
    let target = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${key}`;

    axios.get(target)
      .then((res) =>{
        resolve(res.data);
      })
      .catch((error) => {
        console.log('Error From getProfileData')
        console.error(error);
        return reject(error)
      })
    })
};

module.exports = getProfileData;