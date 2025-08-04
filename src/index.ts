import { Client } from 'pg'; 
import express from "express";
import { isNewExpression } from 'typescript';

const app=express();

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



app.post('/signup' ,async(req ,res)=>{

const username=req.body.username;
const password = req.body.password;
const email= req.body.email;

const response = await pgClient.query(`INSERT INTO users (username,email ,password ,)
VALUES (${username},${email} ,${password} )`);

})