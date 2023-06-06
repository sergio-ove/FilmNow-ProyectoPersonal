const DataTypes = require('sequelize');

userModel = {
    create: async (sequelize) => {
        const Users = sequelize.define('users', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name_user: {
                type: DataTypes.STRING,
                unique: true,
            },
            year_user: {
                type: DataTypes.STRING,
            },

            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            pass: {
                type: DataTypes.STRING,
                unique: true,
            },

        });

        return Users;

    }
}

module.exports = userModel;