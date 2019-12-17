const express = require('express')
const path = require('path')
require('dotenv').config()

const loginController = require("./controllers/loginController.js");
const recipeController = require("./controllers/recipeController.js");
const app = express()

const PORT = process.env.PORT || 5000

app.set("port", (PORT))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  console.log("You are in the root")
  res.sendFile("login.html", {root:__dirname + "/public"})
})
app.use('/loginPage',(req, res) => {
  console.log("You are in the root")

  res.sendFile("login.html", {root:__dirname + "/public"})  
})
app.get("/login", loginController.getRecipes);
app.get("/login", loginController.getAccountInformation);
app.post("/create", loginController.addUserToDB);
app.post("/addRecipe", recipeController.addRecipe);
app.post("/delete", recipeController.deleteRecipe);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(app.get("port"), () => {console.log(`Listening on ${ PORT }`)})

