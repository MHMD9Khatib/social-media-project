const { Pool } = require('pg');
// require("env2")(".env");

// const {
//   env: {
//     DATABASE_URL,
//   },
// } = process;

// let dbUrl = DATABASE_URL;


// const options = {
//   connectionString: dbUrl,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// };

// module.exports = new Pool(options);

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'booklist',
  password: 'password',
  port: 5432,

})


module.exports = pool;



