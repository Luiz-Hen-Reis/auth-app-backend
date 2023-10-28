const { config } = require("dotenv");

config();

module.exports = {
  development: {
    url: process.env.DB_CONNECTION_URL,
    dialect: process.env.DIALECT,
  },
};
