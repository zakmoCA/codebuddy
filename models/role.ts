import { Sequelize, DataTypes, Model } from 'sequelize'

export interface RoleAttributes {
  id?: number 
  name: string
}

export class Role extends Model<RoleAttributes> implements RoleAttributes {
  public id!: number 
  public name!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export default (sequelize: Sequelize) => {
  Role.init({
    name: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'Role'
  })

  return Role
}
