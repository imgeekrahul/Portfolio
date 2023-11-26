const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json({
    extended: true
}));

app.use(cors({
    origin: [
        'http://rahul-ranjan.vercel.app',
        'https://rahulranjan.vercel.app',
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

app.use("/", require('./server'));

app.listen(PORT, () => {
    console.log("Server has started on PORT: ", PORT);
    
})
