import { Sequelize } from 'sequelize'
import user from './user.js'
import role from './role.js'

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', 
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = user(sequelize, Sequelize)
db.roles = role(sequelize, Sequelize)

db.roles.hasMany(db.users)
db.users.belongsTo(db.roles)

export default db