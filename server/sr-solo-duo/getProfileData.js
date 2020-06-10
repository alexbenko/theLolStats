const axios = require('axios');


const getProfileData = (search,key,cb) => {

  //only way i was able to access Riot api was using this proxy
    //https://github.com/Rob--W/cors-anywhere/
    let proxy = 'https://lolstats-cors-proxy.herokuapp.com/';
    let target = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${key}`;

    console.log('Getting Profile Data');
    axios.get(target)
      .then((res) =>{
        //console.log(res.data)
        cb(res.data);
      })
      .catch((error) => {
        console.log('Error From getProfileData')
        console.error(error);
      })

};

module.exports = getProfileData;