import { Pool } from 'pg';

const client = new Pool({
  user: 'root',
  database: 'postgres'
});

client.connect()
  .then((err)=>{
    console.log('Connected To Database Successfully');
  })
  .catch((err)=>{
    throw err;
  });

  module.exports = client;


