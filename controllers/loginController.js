const loginModels = require("../models/loginModels.js");

function getAccountInformation(req,res)
{
    var user = req.query.user;
    var pass = req.query.pass;

    loginModels.getUserInfoFromDB(user,pass, function(error, results){
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
addUserToDB : addUserToDB
};
