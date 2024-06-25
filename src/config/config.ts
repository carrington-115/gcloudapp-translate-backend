import dotenv from "dotenv";
dotenv.config();
const { Translate } = require("@google-cloud/translate").v2;
console.log("key", process.env.API_KEY);
const googleTranslateConfig = new Translate({ key: process.env.API_KEY });
module.exports = googleTranslateConfig;
