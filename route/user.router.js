const express = require('express')

const router = express.Router()


router.get("/", (req, res) =>{

    res.send("I am from get method from server at home")
});
router.get("/register", (req,res) =>{

    res.send("I am form register form")
});
router.get("/login", (req, res) =>{

    res.send("I am from login ")
});

module.exports = router;