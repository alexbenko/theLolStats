const axios = require('axios');

const getChampMatches = (actId,KEY) =>{

  return new Promise((resolve,reject)=>{
    let target = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${actId}&queue=420&season=13&api_key=${KEY}`;
    axios.get(target)
    .then((data)=>{
      resolve(data.data)
    })
    .catch((err)=>{
      reject(new Error(err))
    })

  })

}




module.exports = getChampMatches;