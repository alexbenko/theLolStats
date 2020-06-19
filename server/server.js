const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const RIOT_API_KEY = require('./rito.js');
const sendSoloProfileDataPromise = require('./sr-solo-duo-promises/sendProfileData.js');

const app = express();
const port = process.env.PORT || 4242 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/sr/:summoner',(req,res)=>{
  let toGet = req.params.summoner
  console.log(`Getting Profile Data For ${toGet}...`);

  sendSoloProfileDataPromise(toGet,RIOT_API_KEY)
  .then((results)=>{
    res.status(200).send(results);
  })
  .catch((err)=>{
    console.log('From server:',err)
    res.status(404).send(err);
  })

})


app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`app listening at http://localhost:${port}`));