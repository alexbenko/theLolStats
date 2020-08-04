const axios = require('axios');
//these functions are necessary because the api returns champion names as an id like id , like 222 refers to Jinx
//will always return the most updated champs

const getVersion = async ()=>{
  try{
    let versionObj = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');

    return versionObj.data[0];
  } catch(err){
    console.error(err)
  }
};

//version defaults to this cuz this is the most recent version as of coding this
const getChampData = async (version = "10.15.1")=>{
  try{
    let data = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);

    return data.data
  } catch(err){
    console.error(err)
  }
};

const getChampNameObj = async()=>{
  /* regular promise w/out async/await
  getVersion()
  .then((version)=>{
    getChampData(version)
    .then((result)=>{
      let champData = result.data
      let champions = {};

      for(let key in champData['data']){
        let currentChampKey = champData['data'][key]['key'];
        if(champions[currentChampKey] === undefined){
          champions[currentChampKey] = champData['data'][key]['name'];
          //console.log(champions[currentChampKey])
        }
      }
      //console.log(champions)
      return champions
    })
  })
  with async/await
  */
  let version = await getVersion();
  let champData = await getChampData(version);
  let champions = {};

  for(let key in champData['data']){
    let currentChampKey = champData['data'][key]['key'];
    if(champions[currentChampKey] === undefined){
      champions[currentChampKey] = champData['data'][key]['name'];
    }
  }

  return champions
}


export default getChampNameObj


/* function returns an object similar to this
{ '1': 'Annie',
  '2': 'Olaf',
  '3': 'Galio',
  '4': 'Twisted Fate',
  '5': 'Xin Zhao',
  '6': 'Urgot',
  '7': 'LeBlanc',
  '8': 'Vladimir',
  '9': 'Fiddlesticks',
  '10': 'Kayle',
  '11': 'Master Yi',
  '12': 'Alistar',
  '13': 'Ryze',
  '14': 'Sion',
  '15': 'Sivir',
  '16': 'Soraka',
  '17': 'Teemo',
  '18': 'Tristana',
  '19': 'Warwick',
  '20': 'Nunu & Willump',
  '21': 'Miss Fortune',
  '22': 'Ashe',
  '23': 'Tryndamere',
  '24': 'Jax',
  '25': 'Morgana',
  '26': 'Zilean',
  '27': 'Singed',
  '28': 'Evelynn',
  '29': 'Twitch',
  '30': 'Karthus',
  '31': 'Cho\'Gath',
  '32': 'Amumu',
  '33': 'Rammus',
  '34': 'Anivia',
  '35': 'Shaco',
  '36': 'Dr. Mundo',
  '37': 'Sona',
  '38': 'Kassadin',
  '39': 'Irelia',
  '40': 'Janna',
  '41': 'Gangplank',
  '42': 'Corki',
  '43': 'Karma',
  '44': 'Taric',
  '45': 'Veigar',
  '48': 'Trundle',
  '50': 'Swain',
  '51': 'Caitlyn',
  '53': 'Blitzcrank',
  '54': 'Malphite',
  '55': 'Katarina',
  '56': 'Nocturne',
  '57': 'Maokai',
  '58': 'Renekton',
  '59': 'Jarvan IV',
  '60': 'Elise',
  '61': 'Orianna',
  '62': 'Wukong',
  '63': 'Brand',
  '64': 'Lee Sin',
  '67': 'Vayne',
  '68': 'Rumble',
  '69': 'Cassiopeia',
  '72': 'Skarner',
  '74': 'Heimerdinger',
  '75': 'Nasus',
  '76': 'Nidalee',
  '77': 'Udyr',
  '78': 'Poppy',
  '79': 'Gragas',
  '80': 'Pantheon',
  '81': 'Ezreal',
  '82': 'Mordekaiser',
  '83': 'Yorick',
  '84': 'Akali',
  '85': 'Kennen',
  '86': 'Garen',
  '89': 'Leona',
  '90': 'Malzahar',
  '91': 'Talon',
  '92': 'Riven',
  '96': 'Kog\'Maw',
  '98': 'Shen',
  '99': 'Lux',
  '101': 'Xerath',
  '102': 'Shyvana',
  '103': 'Ahri',
  '104': 'Graves',
  '105': 'Fizz',
  '106': 'Volibear',
  '107': 'Rengar',
  '110': 'Varus',
  '111': 'Nautilus',
  '112': 'Viktor',
  '113': 'Sejuani',
  '114': 'Fiora',
  '115': 'Ziggs',
  '117': 'Lulu',
  '119': 'Draven',
  '120': 'Hecarim',
  '121': 'Kha\'Zix',
  '122': 'Darius',
  '126': 'Jayce',
  '127': 'Lissandra',
  '131': 'Diana',
  '133': 'Quinn',
  '134': 'Syndra',
  '136': 'Aurelion Sol',
  '141': 'Kayn',
  '142': 'Zoe',
  '143': 'Zyra',
  '145': 'Kai\'Sa',
  '150': 'Gnar',
  '154': 'Zac',
  '157': 'Yasuo',
  '161': 'Vel\'Koz',
  '163': 'Taliyah',
  '164': 'Camille',
  '201': 'Braum',
  '202': 'Jhin',
  '203': 'Kindred',
  '222': 'Jinx',
  '223': 'Tahm Kench',
  '235': 'Senna',
  '236': 'Lucian',
  '238': 'Zed',
  '240': 'Kled',
  '245': 'Ekko',
  '246': 'Qiyana',
  '254': 'Vi',
  '266': 'Aatrox',
  '267': 'Nami',
  '268': 'Azir',
  '350': 'Yuumi',
  '412': 'Thresh',
  '420': 'Illaoi',
  '421': 'Rek\'Sai',
  '427': 'Ivern',
  '429': 'Kalista',
  '432': 'Bard',
  '497': 'Rakan',
  '498': 'Xayah',
  '516': 'Ornn',
  '517': 'Sylas',
  '518': 'Neeko',
  '523': 'Aphelios',
  '555': 'Pyke',
  '875': 'Sett' }

*/