const { Translate } = require("@google-cloud/translate").v2;
const googleTranslateConfig = new Translate();
googleTranslateConfig.module.exports = googleTranslateConfig;
