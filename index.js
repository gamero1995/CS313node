require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { Pool } = require("pg")

const PORT = process.env.PORT || 5000
const connectionString = process.env.DATABASE_URL
const pool = new Pool({connectionString: connectionString})

app.set("port", (PORT))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/login", (req, res)=>{
  var sql = "SELECT * FROM db_users"

  pool.query(sql, function(err, result){
    if (err){
    console.log("Error in query: ")
    console.log(err)
  }
  console.log("Back from DB with result: ")
  console.log(result.rows)
  const data = result.rows
  const username = data[0].username
  const password = data[0].password

  var params = {username: username, password: password}
  res.render("login", params)
    
  })
})

app.get('/', (req, res) => {
  console.log("You are in the root")
  res.sendFile("login.html", {root:__dirname + "/public"})
})
app.listen(app.get("port"), () => {console.log(`Listening on ${ PORT }`)})

