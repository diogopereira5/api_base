module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('avatar', {
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
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      url_avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('avatar');

  }
};
