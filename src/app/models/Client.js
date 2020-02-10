import Sequelize, { Model } from 'sequelize';

class Client extends Model {
    static init(sequelize) {
        super.init({

            id_empresa: Sequelize.INTEGER,
            nome: Sequelize.STRING,
            apelido: Sequelize.STRING,
            email: Sequelize.STRING,
            telefone: Sequelize.STRING,
            id_usuario: Sequelize.INTEGER,
            cep: Sequelize.STRING,
            logradouro: Sequelize.STRING,
            numero: Sequelize.INTEGER,
            bairro: Sequelize.STRING,
            estado: Sequelize.STRING,
            cidade: Sequelize.STRING,
            status: Sequelize.INTEGER,

        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Client;