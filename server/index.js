const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const portFolio = require("./model/portfolio");

const app = express();

app.use(express.json({
    extended: true
}));

app.use(cors({
    origin: [
        'https://portfolio-server-rahul.vercel.app',
        'http://localhost:3000'
    ],
    methods: ["POST"],
    optionSuccessStatus: 200,
    credentials: true,
}));

const PORT = 8080;

const connectDB = async () => {
    try {
        let con = await mongoose.connect("mongodb+srv://admin:admin@cluster0.j6hqihe.mongodb.net/portfolio?retryWrites=true&w=majority");
        console.log(`MongoDB database:`, con.connections[0].name)
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

connectDB();



app.post("/add_request", async (req, res) => {
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

app.get("/", (req, res) => {
    res.status(200).json("Server is running");
})

app.listen(PORT, () => {
    console.log("Server has started on PORT: ", PORT);
    
})
