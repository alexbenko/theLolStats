const axios = require('axios');

const getProfileData = (search,key) => {

  return new Promise((resolve, reject)=>{
    let target = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${key}`;

    axios.get(target)
      .then((res) =>{
        resolve(res.data);
      })
      .catch((error) => {
        reject(new Error(error.response.status))
      })
    })
};

module.exports = getProfileData;