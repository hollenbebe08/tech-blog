const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create User model
class User extends Model {}

//define table columns and configuration
User.init(
    {
        id:  
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
        },
        //define a password column

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //ensures the password is at least four characters long
                len: [4]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
);

module.exports = User;