const axios = require('axios');

const getGameWinOrLoss = (matchId,summoner,KEY) =>{
  return new Promise((resolve,reject)=>{
    let target = `https://na1.api.riotgames.com/lol/match/v4/matches/${matchId}api_key=${KEY}`;

    axios.get(target)
    .then((data)=>{
      let matchData = data.data;

    })
    .catch((err)=>{
      console.error('Error From champWr');
      reject(new Error(err))
    })
  })
}

module.exports = getGameWinOrLoss;