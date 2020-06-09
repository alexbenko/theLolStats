import { Pool } from 'pg';

const client = new Pool({
  user: 'alex',
  host: ubuntu.host,
  database: 'sdc',
  port:'5432',
  password: ubuntu.password
});