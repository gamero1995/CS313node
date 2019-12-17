const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
// console.log("DB URL: " + db_url);
const pool = new Pool({connectionString: db_url});

function addRecipeToDB(name, category, ingredients, direction, youtube, id, callback){

    // var sql = "INSERT INTO db_users (username, password) VALUES (user, pass)"

    pool.query('INSERT INTO recipe (recipe_name, ingredients, category, direction, youtube_link, user_id) VALUES ($1, $2, $3, $4, $5, $6)'
    , [name, category, ingredients, direction, youtube, id], function(err, result){
        if (err){
            console.log("Error in query: ")
            console.log(err)
          }
    let params = {success: true}
    

    callback(null, params)
        //   result.send()
    });

}

function deleteRecipeFromDB(id, callback){
    pool.query('DELETE FROM recipe WHERE recipe_id = $1', [id], function(err, result){
        if (err){
            console.log("Error in query: ")
            console.log(err)
          }
          let params = {success:true}
          callback(null, params)
    });
}

module.exports = {
    addRecipeToDB : addRecipeToDB,
    deleteRecipeFromDB : deleteRecipeFromDB
}