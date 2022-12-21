import  {Sequelize  , DataTypes }  from  'sequelize'
import  db from '../config/db.js'





const blogs = db.define( 'blogs' , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    blogbody : {
        type: Sequelize.STRING,
    },
    blogtitle: {
        type : Sequelize.STRING,
    },
    userid: {
        type : DataTypes.INTEGER,
    },
    imagepath: {
        type : DataTypes.INTEGER,
    }


} , 
{
    timestamps: false,
    tableName: 'blogs',
    freezeTableName:true,
})

async function migratoin () {
    await blogs.sync();
}
migratoin()


export default blogs