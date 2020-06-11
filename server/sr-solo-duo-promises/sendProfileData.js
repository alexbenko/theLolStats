const getRankData    = require('./getRankData.js');
const getProfileData = require('./getProfileData.js');
const getChampData   = require('./getChampData.js');

const checkIfUserHasRank = (rankInfo) =>{
  if(rankInfo.length === 0 ) {
    return (' Unranked');
  } else {
    return (rankInfo.tier + ' ' + rankInfo.rank);
  }
};

const checkWins = (rankInfo) =>{
  if(rankInfo.length === 0) {
    return (' No Ranked Data Available For this Season')
  } else {
    return (rankInfo.wins)
  }
};

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
          let wins = checkWins(rank[0]);
          let rankAndTier = checkIfUserHasRank(rank[0]);

          profileData.rank = rankAndTier;
          profileData.wins = wins;
          profileData.hotStreak = rank[0]["hotStreak"];

        } else {
          let wins = checkWins(rank[1]);
          let rankAndTier = checkIfUserHasRank(rank[1]);

          profileData.rank = rankAndTier;
          profileData.wins = wins;
          profileData.hotStreak = rank[1]["hotStreak"];
        }
      })
    })
    .then(()=>{
      console.log('Getting Champion Data...')
      getChampData(profileData.id,KEY)
      .then((champData)=>{
        profileData.champData = champData;
        return resolve(profileData)
      })
    })
  })
};


module.exports = sendSoloProfileData;