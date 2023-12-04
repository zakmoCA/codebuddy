import { Sequelize } from 'sequelize'
import user, { User } from './user'
import role, { Role } from './role'
import project, { Project } from './project'
import file, { File } from './file'
import chatThread, { ChatThread } from './chat_thread'
import message, { Message } from './message'
import projectChat, { ProjectChat } from './project_chat'
import { dbConfig } from '../config'

interface Db {
  sequelize: Sequelize
  Sequelize: typeof Sequelize
  users: typeof User
  roles: typeof Role
  projects: typeof Project
  files: typeof File
  chatThreads: typeof ChatThread
  messages: typeof Message
  projectChats: typeof ProjectChat
}

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres', 
})

const db: Db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  users: user(sequelize),
  roles: role(sequelize),
  projects: project(sequelize),
  files: file(sequelize),
  chatThreads: chatThread(sequelize),
  messages: message(sequelize),
  projectChats: projectChat(sequelize)
}


db.users.hasMany(db.roles)
db.roles.belongsTo(db.users)

// flesh out relationships in next commit-batch

export default db
