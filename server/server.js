const express = require('express');

const route = express.Router();

route.get("/", (req, res)=> {
    res.status(200).json("App is running");
})

route.post("/add_request", async (req, res) => {
    try {
        res.json("Hii");
        // const name = req.body.name;
        // const email = req.body.email;
        // const subject = req.body.subject;
        // const message = req.body.message;
    
        // const data = {
        //     name: name,
        //     email: email,
        //     subject: subject,
        //     message: message
        // }

        // await portFolio.create(data);
        // res.status(201).json(data);
    } catch(err) {
        console.log(err);
    }
})

module.exports = route