//get request that needs accounts encrypted ID, and my API key
import axios from 'axios';

const searchForChampions = ({encryptedId,key}, cb) =>{
  //change the state inside the get request
  let proxy = 'https://lolstats-cors-proxy.herokuapp.com/';
  let target = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedId}?api_key=${key}`;

  console.log('Getting Champion Data');
  axios.get(proxy + target)
    .then(res => {
      cb(res.data);
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response.data);
        console.log(error.response.response);
      }
    })

};


export default searchForChampions