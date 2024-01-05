import { Sequelize, DataTypes, Model } from 'sequelize'
import { User } from './user'

export interface ProjectAttributes {
  id?: number
  name: string
  description?: string
  userId: number
}

export class Project extends Model<ProjectAttributes> implements ProjectAttributes {
  public id!: number
  public name!: string
  public description!: string
  public userId!: number
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export default (sequelize: Sequelize) => {
  Project.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'Project'
  })

  return Project
}
