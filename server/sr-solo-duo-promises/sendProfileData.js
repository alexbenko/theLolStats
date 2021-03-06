const getRankData     = require('./getRankData.js');
const getProfileData  = require('./getProfileData.js');
const getChampData    = require('./getChampData.js');
const getChampMatches = require('./getChampMatches.js');

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

const calculateWinRate = (wins,losses) =>{
    let total = wins + losses;
    let winRate = (wins/total) * 100;
    return Math.floor(winRate);
};

let sendSoloProfileData = (summoner,KEY) =>{
  return new Promise ((resolve, reject)=> {
    let profileData = {};

    console.log('Getting Profile Data...');
    getProfileData(summoner,KEY)
    .then((profile)=>{
      profileData.id            = profile["id"];
      profileData.actId         = profile["accountId"];
      profileData.name          = profile["name"];
      profileData.summonerLevel = profile["summonerLevel"];
      profileData.profileIconId = profile["profileIconId"];
    })
    .catch((err)=>reject(new Error(err)))
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
          profileData.totalWr = calculateWinRate(rank[0]["wins"],rank[0]["losses"] );
          profileData.hotStreak = rank[0]["hotStreak"];

        } else {
          let wins = checkWins(rank[1]);
          let rankAndTier = checkIfUserHasRank(rank[1]);

          profileData.rank = rankAndTier;
          profileData.wins = wins;
          profileData.totalWr = calculateWinRate(wins,rank[1]["losses"]);
          profileData.hotStreak = rank[1]["hotStreak"];
        }
      })
    })
    .catch((err)=>reject(new Error(err)))
    .then(()=>{
      getChampData(profileData.id,KEY)
      .then((champData)=>{
        profileData.champData = champData;
        resolve(profileData)
      })
    })
    .catch((err)=>reject(new Error(err)))
  })
};


module.exports = sendSoloProfileData;


/*
.then(()=>{
        profileData.champData.map((champ)=>{
          champ.winRate = 0;
          //resolve(profileData)
          let championId = champ["championId"];
          getChampMatches(profileData.actId,KEY)
          .then((matches)=>{
            console.log(matches["totalGames"])
            champ.totalMatches = matches["totalGames"];

          })
        })
      })
*/