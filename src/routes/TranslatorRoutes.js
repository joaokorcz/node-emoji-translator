const express = require("express");

const routes = express.Router();

const TranslatorController = require("../controllers/TranslatorController");

//user profile picture upload
routes.post("/translateSentence",
    TranslatorController.translateSentence
);

module.exports = routes;