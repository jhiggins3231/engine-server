module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define('wishlist', {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        motorName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
})
return Wishlist;
}