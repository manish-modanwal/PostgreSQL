import { Client } from 'pg';

const pgClient = new Client({
  host: "ep-lucky-cloud-ab0xy61z-pooler.eu-west-2.aws.neon.tech",
  port: 5432, 
  database: "neondb",
  user: "neondb_owner",
  password: "npg_hn7NK1AEFuqf", 
  ssl: {
    rejectUnauthorized: false, 
  },
});

async function main() {
  await pgClient.connect(); 
  const response = await pgClient.query("SELECT * FROM users;");
  console.log(response.rows); 
  await pgClient.end(); 
}

main(); 
