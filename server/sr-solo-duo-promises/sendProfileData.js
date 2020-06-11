const getRankData    = require('./getRankData.js');
const getProfileData = require('./getProfileData.js');
const getChampData   = require('./getChampData.js');
const RIOT_API_KEY = require('../rito.js');

let sendSoloProfileData = (summoner,KEY) =>{
  return new Promise ((resolve, reject)=> {
    let profileData = {};

    console.log('Getting Profile Data...');
    getProfileData(summoner,KEY)
    .then((profile)=>{
      console.log(profile)
      profileData.id            = profile["id"];
      profileData.name          = profile["name"];
      profileData.summonerLevel = profile["summonerLevel"];
      profileData.profileIconId = profile["profileIconId"];
    })
    .then(()=>{
      console.log('Getting Rank Data...')
      getRankData(profileData.id, KEY)
      .then((rank)=>{
         //order of the array returned can change from day to day
      if(rank[0]["queueType"] === "RANKED_SOLO_5x5"){
        profileData.tier = rank[0]["tier"];
        profileData.rank = rank[0]["rank"];
        profileData.wins = rank[0]["wins"];
        profileData.hotStreak = rank[0]["hotStreak"];

      } else {
        profileData.tier = rank[1]["tier"];
        profileData.rank = rank[1]["rank"];
        profileData.wins = rank[1]["wins"];
        profileData.hotStreak = rank[1]["hotStreak"];
      }
      })
    })
    .then(()=>{
      console.log('Getting Champion Data...')
      getChampData(profileData.id,KEY)
      .then((champData)=>{
        console.log(profileData)
        profileData.champData = champData;
        return resolve(profileData)
      })
    })
  })
};


sendSoloProfileData("Daddy Thick",RIOT_API_KEY);