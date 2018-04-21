module.exports = function (sequelize, DataTypes) {
    var POI = sequelize.define("POI", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: true
        },
        poi_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poi_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        poi_address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        poi_description: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return POI;
};