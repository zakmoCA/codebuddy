import { Sequelize, DataTypes, Model } from 'sequelize'
import { Project } from './project'

export interface FileAttributes {
  id?: number
  name: string
  content: string
  projectId: number
}

export class File extends Model<FileAttributes> implements FileAttributes {
  public id!: number
  public name!: string
  public content!: string
  public projectId!: number
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export default (sequelize: Sequelize) => {
  File.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Project, key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'File'
  })

  return File
}
