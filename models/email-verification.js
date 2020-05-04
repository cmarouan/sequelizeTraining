const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Email = sequelize.define("email-verification", {
  step: DataTypes.JSONB,
});

module.exports = Email;
