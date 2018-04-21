module.exports = function (sequelize, DataTypes) {
    var Destination = sequelize.define("Destination", {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        }
    });

    return Destination;
};