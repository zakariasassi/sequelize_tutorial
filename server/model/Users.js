import {Sequelize  , DataTypes} from 'sequelize'
import db from '../config/db.js'


const users = db.define( 'users' , {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type: DataTypes.STRING,  
    },
    password :{
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        }


}, 
{
    timestamps: false,
    tableName: "users",
    freezeTableName: true
})



export default users