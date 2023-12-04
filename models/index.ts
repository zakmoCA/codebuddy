import { Sequelize } from 'sequelize'
import user, { User } from './user'
import role, { Role } from './role'
import { dbConfig } from '../config'

interface Db {
  sequelize: Sequelize
  Sequelize: typeof Sequelize
  users: typeof User
  roles: typeof Role
}

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres', 
})

const db: Db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  users: user(sequelize),
  roles: role(sequelize)
}

db.users.hasMany(db.roles)
db.roles.belongsTo(db.users)

export default db
