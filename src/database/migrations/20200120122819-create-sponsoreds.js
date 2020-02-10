module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sponsoreds', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      codregisitro: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      razao_social: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fantasia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone01: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone02: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      intervalo_horario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      prazo_cancelamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sponsoreds');

  }
};
