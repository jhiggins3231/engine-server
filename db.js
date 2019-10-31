const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres' 
});

sequelize.authenticate()
.then(() => console.log('pick your poison'))
.catch(err => console.log(err));

module.exports = sequelize;