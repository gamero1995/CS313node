const recipeModels = require("../models/recipeModels.js");


function addRecipe(req,res){
    var name = req.body.name;
    var category = req.body.category;
    var ingredients = req.body.ingredients;
    var direction = req.body.directions;
    var youtube = req.body.youtube;
    var id = req.body.id;

    console.log("Received Value :" + name + ", " + category+ ", " + ingredients+ ", "+direction + ", " + youtube + ", "
    + id)

    recipeModels.addRecipeToDB(name, category, ingredients, direction, youtube, id, function(error,results){
        if(error) {
            console.log("ERROR!")
        }
        console.log();
        res.sendFile("login.ejs", {root:__dirname + "/../views"}) 
    
    })

}

function deleteRecipe(req,res){
    var id = parseInt(req.body.id);

    console.log("recieved id #:" + id)
    recipeModels.deleteRecipeFromDB(id, function(error, results){
        if (error){
            console.log("Error")
        }
        res.json(results)
    })
}

module.exports = {
    addRecipe : addRecipe,
    deleteRecipe : deleteRecipe
};