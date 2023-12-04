import { Sequelize, DataTypes, Model } from 'sequelize'

export interface ChatThreadAttributes {
  id?: number
  name: string
}

export class ChatThread extends Model<ChatThreadAttributes> implements ChatThreadAttributes {
  public id!: number
  public name!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export default (sequelize: Sequelize) => {
  ChatThread.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ChatThread'
  })

  return ChatThread
}
