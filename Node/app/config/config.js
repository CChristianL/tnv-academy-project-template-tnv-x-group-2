import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "progettoFinale",//"tnv-final-project",
  username: "root",
  password: "Scintilla",
  host: "localhost",
  port: 3306, // 8889,
  dialect: "mysql",
}); 

export default db;
