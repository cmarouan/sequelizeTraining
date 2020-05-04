const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Journey = sequelize.define("journey", {
  name: DataTypes.STRING(50),
});

module.exports = Journey;
