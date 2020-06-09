const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Cookies = require('universal-cookie');

const app = express();
const port = process.env.PORT || 4200 ;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 6000000
  }
}));





/*
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))

app.get('/bop', function(req, res){
  if(req.session.page_views){
     req.session.page_views++;
     res.send("You visited this page " + req.session.page_views + " times");
  } else {
     req.session.page_views = 1;
     res.send("Welcome to this page for the first time!");
  }
});
*/

/*
app.use('/cookie', (req,res)=>{
  const cookies = new Cookies(req.headers.cookie);
  let response = cookies.get('myCat');
  console.log(cookies.get('myCat'));
  res.send(response);
})
*/
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`app listening at http://localhost:${port}`));