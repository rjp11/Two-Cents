module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }
    });

    return User;
};