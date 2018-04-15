module.exports = function (sequelize, DataTypes) {
    var UserDestinations = sequelize.define("UserDestinations", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        destination_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return UserDestinations;
};