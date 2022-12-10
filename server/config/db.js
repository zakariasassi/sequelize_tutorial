import  {Sequelize}  from 'sequelize'


const db = new Sequelize( 'lystore' , 'root' , 'root' , {
    dialect:'mysql',
    host: '127.0.0.1',
    port: 3306,
    define: {
        timestamps: false
      }
    }
)



 async function testConncation () {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


testConncation()



export default db