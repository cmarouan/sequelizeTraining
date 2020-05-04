const sequelize = require('../config/db');
const Journey = require('../models/journey');
const Email = require('../models/email-verification');

Journey.hasOne(Email);
Email.belongsTo(Journey);

(async () => {
    await sequelize.sync({ force: true });
})();

module.exports = "table craeted";