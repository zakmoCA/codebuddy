import { Sequelize } from 'sequelize'
import user from './user.js'
import role from './role.js'
import { dbConfig } from '../config.js';

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres', 
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = user(sequelize, Sequelize)
db.roles = role(sequelize, Sequelize)

db.roles.hasMany(db.users)
db.users.belongsTo(db.roles)

export default db