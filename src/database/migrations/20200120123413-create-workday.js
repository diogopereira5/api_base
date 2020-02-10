module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workday', {
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
      dia_semana: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hora_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora_final: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('workday');

  }
};
