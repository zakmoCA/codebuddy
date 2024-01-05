import { Sequelize, DataTypes, Model } from 'sequelize'
import { User } from './user'
import { ChatThread } from './chat_thread'

export interface MessageAttributes {
  id?: number
  content: string
  userId: number
  chatThreadId: number
}

export class Message extends Model<MessageAttributes> implements MessageAttributes {
  public id!: number
  public content!: string
  public userId!: number
  public chatThreadId!: number
  public readonly createdAt!: Date
}

export default (sequelize: Sequelize) => {
  Message.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: 'id' }
    },
    chatThreadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: ChatThread, key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'Message'
  })

  return Message
}
