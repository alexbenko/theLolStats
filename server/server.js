const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const RIOT_API_KEY = require('./rito.js');

const getRankData    = require('./sr-solo-duo/getRankData.js');
const getProfileData = require('./sr-solo-duo/getProfileData.js');
const getChampData   = require('./sr-solo-duo/getChampData.js');

//console.log(typeof sendSoloProfileData)

const app = express();
const port = process.env.PORT || 4242 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

//for some reason importing this function from another file converted it to an object
//TODO: Figure out why and how to fix it
//TODO: Refractor to be promies instead of this callback hell
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
        console.log(profileData)
        profileData.champData = champData;
        //ran into a scoping issue where i called the callbaxk outside of this and it send back an empty object
        cb(profileData);
      })
    })
  })

};


app.use('/sr/:summoner',(req,res)=>{
  let toGet = req.params.summoner
  console.log(`Getting Profile Data For ${toGet}...`);

  sendSoloProfileData(toGet,RIOT_API_KEY,(results)=>{

    //res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
    res.status(200).send(results);

  })
})


app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`app listening at http://localhost:${port}`));