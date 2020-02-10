import Sequelize, { Model } from 'sequelize';

class Profissional extends Model {
    static init(sequelize) {
        super.init({

            id_empresa: Sequelize.INTEGER,
            id_usuario: Sequelize.INTEGER,
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            cep: Sequelize.STRING,
            logradouro: Sequelize.STRING,
            numero: Sequelize.INTEGER,
            bairro: Sequelize.STRING,
            estado: Sequelize.STRING,
            cidade: Sequelize.STRING,
            id_funcao: Sequelize.INTEGER,
            status: Sequelize.INTEGER,

        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Profissional;