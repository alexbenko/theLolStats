import { Pool } from 'pg';

const client = new Pool({
  user: 'root',
  database: 'postgres'
});