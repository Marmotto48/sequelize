'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class driver extends Model {

    static associate(models) {
      // define association here
      
      this.hasMany(models.aladinDB.models.test, { foreignKey: "driverID", sourceKey: 'id' })
      console.log('associationModel',models.aladinDB.models.test)
    }
  }
  driver.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize : sequelize.sultanDB,
    modelName: 'driver',
  });
  return driver;
};