const getRankData    = require('./getRankData.js');
const getProfileData = require('./getProfileData.js');
const getChampData   = require('./getChampData.js');


let sendSoloProfileData = (summoner,KEY,cb) =>{
  let profileData = {};

  getProfileData(summoner,KEY,(profile)=>{
    profileData.id            = profile["id"];
    profileData.name          = profile["name"];
    profileData.summonerLevel = profile["summonerLevel"];
    profileData.profileIconId = profile["profileIconId"];

    getRankData(profileData.id,KEY,(rank)=>{
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
      getChampData(profileData.id,KEY,(champData)=>{
        //console.log('Champ Data:',champData);
        console.log(profileData)
        profileData.champData = champData;
        //console.log('After functions',profileData)
        //ran into a scoping issue where i called the callbaxk outside of this and it send back an empty object
        cb(profileData);
      })
    })
  })
};

console.log(sendSoloProfileData)
