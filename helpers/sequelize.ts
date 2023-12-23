import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.mysqlDatabase, process.env.mysqlUsername, process.env.mysqlPassword, {
    dialect: "mysql",
    host: process.env.host,
    define: {
        timestamps: false
    }

})


export default sequelize