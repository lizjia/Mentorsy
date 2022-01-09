import { createConnection } from 'mysql';

var con = createConnection({
  host: "127.0.0.1:3306",
  user: "root",
  password: "Jiajia12!@",
  database: 'Mentorsy'
});

con.connect(function(err) {
  if (err) throw err;

  console.log("Connected!");
});