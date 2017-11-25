// db connect
let promise = require('bluebird');
let options = {
  // Initialization Options
  promiseLib: promise,
 };

let pgp = require('pg-promise')(options);
let connectionString = process.env.DATABASE_URL;
let db = pgp(connectionString);	

module.exports =  db ;
