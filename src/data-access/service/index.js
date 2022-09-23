
const makeDb = require("../../config/db.config");
const db = require("./service.query");

const serviceDB = makeDb ({ db });

module.exports = serviceDB;
