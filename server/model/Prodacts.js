import  {Sequelize  , DataTypes }  from  'sequelize'
import  db from '../config/db.js'





const prodacts = db.define( 'prodacts' , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prodactname : {
        type: Sequelize.STRING,
    },
    prodactdescription: {
        type : Sequelize.STRING,
    },
    prodactprice: {
        type : DataTypes.FLOAT,
    }


} , 
{
    timestamps: false,
    tableName: 'prodacts',
    freezeTableName:true,
})

async function migratoin () {
    await prodacts.sync();
}
migratoin()


export default prodacts