module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('points', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_empresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtd_points: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('points');

  }
};
