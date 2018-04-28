module.exports = function (sequelize, DataTypes) {
    var Destination = sequelize.define("Destination", {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        coord_lat: {
            type: DataTypes.DECIMAL,
            allNull: false
        },
        coord_long: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        zoom: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });

    return Destination;
};