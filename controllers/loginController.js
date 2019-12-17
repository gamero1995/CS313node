const loginModels = require("../models/loginModels.js");

function getRecipes(req,res)
{
    var id = 1;
    loginModels.getAllRecipes(id, function(error, result){
            console.log(result);
            res.render("login", {result : result.list} )
    });
}

function getAccountInformation(req,res)
{
    var user = req.query.user;
    var pass = req.query.pass;

    loginModels.getUserInfoFromDB(user, function(error, results){
        res.render("login", results)
    });
}

function addUserToDB(req, res)
{
    var username = req.body.user;
    var password = req.body.pass;

    console.log("Creating new user under:" + username)
    
    loginModels.addUSerInfoToDB(username, password, function(error,results){
        if(error) {
            console.log("ERROR!")
        }
        res.json(results)
    
    })
}

module.exports = {
getAccountInformation : getAccountInformation,
getRecipes : getRecipes,
addUserToDB : addUserToDB
};
