const mongoose = require("mongoose");

const portFolioRequestSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
}, {
    timestamps: true
})

const portFolio = mongoose.model("portfolioRequest", portFolioRequestSchema);
module.exports = portFolio;