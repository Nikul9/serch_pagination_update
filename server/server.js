require('dotenv').config()
const express = require("express") 
const app = express()
const cors = require('cors')
const customersRoute = require("./modules/customersModules/customersRouter")
const dbConfig = require('./Config/dbConnection')

app.use(express.json())
app.use(cors())
app.use(express.static("public"))
app.use("/api",customersRoute)
app.listen(process.env.PORT, () => {
    console.log(`1, Server running at port no. ${process.env.PORT} in  mode.`);
    dbConfig.connectDb()
})