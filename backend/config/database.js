import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', '1234', {
    host : "localhost",
    dialect : "mysql"
})

export default db;