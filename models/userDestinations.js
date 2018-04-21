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
            type: DataTypes.STRING(2000),
            allowNull: true
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }
    });

    return UserDestinations;
};