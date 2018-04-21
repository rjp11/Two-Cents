module.exports = function (sequelize, DataTypes) {
    var UserDestinations = sequelize.define("UserDestinations", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        concat: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return UserDestinations;
};