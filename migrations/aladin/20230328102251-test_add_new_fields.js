'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'test', // table name
      'driverID', // new field name
      {
        type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'driver',
            schema:'sultanDB'
            },
            
            key: "id",
            // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        onUpdate: 'CASCADE',
          onDelete:'SET NULL'
      },
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
