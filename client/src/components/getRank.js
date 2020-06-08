import axios from 'axios';

const getRank = ({encryptedId,key},cb) =>{
  let proxy = 'https://lolstats-cors-proxy.herokuapp.com/';
  let target = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedId}?api_key=${key}`;

  console.log("Getting Rank");
  axios.get(proxy + target)
  .then((res) =>{

    cb(res.data);
  })
  .catch((err)=>{
    console.error("Error:",err);

  })
};

export default getRank;