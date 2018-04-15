module.exports = function (sequelize, DataTypes) {
    var POI = sequelize.define("POI", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        destination_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        poi_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poi_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poi_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poi_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return POI;
};