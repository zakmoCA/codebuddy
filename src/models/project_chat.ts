import { Sequelize, DataTypes, Model } from 'sequelize'
import { User } from './user'
import { Project } from './project'

export interface ProjectChatAttributes {
  id?: number
  content: string
  userId: number
  projectId: number
}

export class ProjectChat extends Model<ProjectChatAttributes> implements ProjectChatAttributes {
  public id!: number
  public content!: string
  public userId!: number
  public projectId!: number
  public readonly createdAt!: Date
}

export default (sequelize: Sequelize) => {
  ProjectChat.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: 'id' }
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Project, key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'ProjectChat'
  })

  return ProjectChat
}
