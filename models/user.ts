import { Sequelize, DataTypes, Model } from 'sequelize'

export interface UserAttributes {
  id?: number
  username: string
  email: string
  password: string
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number
  public username!: string
  public email!: string
  public password!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export default (sequelize: Sequelize) => {
  User.init({
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'User'
  })

  return User
}
