'use strict';
const {
  Model,

} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.sultanDB.models.driver, {foreignKey : "driverID", targetKey:'id'} )

    }
  }
  test.init({
    test: DataTypes.STRING,
    secondTest: DataTypes.STRING,
  }, {
    sequelize : sequelize.aladinDB,
    modelName: 'test',
  });
  return test;
};