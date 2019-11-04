const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres' 
});

sequelize.authenticate()
.then(() => console.log('pick your poison'))
.catch(err => console.log(err));

module.exports = sequelize;