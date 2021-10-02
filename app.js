const express = require('express')

const app = express()

const userRouter = require("./route/user.router.js")

app.use("/api/user", userRouter)


app.use("/", (req, res) =>{

    res.send("I am from get method from server at home")
})

app.use((req,res) =>{

    res.send("400!!! Page Not Found")
})

module.exports = app;

