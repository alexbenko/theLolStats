import axios from 'axios';

const searchForProfile = ({search,key},cb) => {
  //only way i was able to access Riot api was using this proxy
    //https://github.com/Rob--W/cors-anywhere/
    let proxy = 'https://lolstats-cors-proxy.herokuapp.com/';
    let target = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${key}`;

    console.log('Getting Profile Data');
    axios.get(proxy + target)
      .then((res) =>{
        cb(res.data);
      })
      .catch((error) => {
        console.error(error);
      })

};

export default searchForProfile;