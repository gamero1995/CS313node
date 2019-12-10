const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
// console.log("DB URL: " + db_url);
const pool = new Pool({connectionString: db_url});

function getUserInfoFromDB(user, pass, callback){

   var sql = "SELECT * FROM db_users"
   pool.query(sql, function(err, result){
      if (err){
         console.log("Error in query: ")
         console.log(err)
       }
      console.log("Back from DB with result: ")
      console.log(result.rows)
      const data = result.rows
      
      username = data[0].username
      password = data[0].password
     
      var params = {username: user, password: pass}
      
      callback(null, params);
        }  
    );
}


function addUSerInfoToDB(user, pass, callback){

    // var sql = "INSERT INTO db_users (username, password) VALUES (user, pass)"

    pool.query('INSERT INTO db_users (username, password) VALUES ($1, $2)', [user, pass], function(err, result){
        if (err){
            console.log("Error in query: ")
            console.log(err)
          }
    let params = {success: true}

    callback(null, params)
        //   result.send()
    });

}

module.exports = {
    getUserInfoFromDB : getUserInfoFromDB,
    addUSerInfoToDB : addUSerInfoToDB
}