const DataTypes = require('sequelize');

FavoritesModel = {
    create: async (sequelize) => {
        const Favorites = sequelize.define('activities', {
            id_favorite: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            text_: {
                type: DataTypes.STRING,
                allowNull: false
            },
            date_:{
                type: DataTypes.DATE,
                allowNull: true
            },
            fk_id_card: {
                type: DataTypes.INTEGER,
                allowNull: true
            },            
            fk_id_user: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        }, {
            timestamps: false
        });

        return Users;

    }
}

module.exports = FavoritesModel;