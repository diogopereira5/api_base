import Sequelize, { Model } from 'sequelize';

class Sponsored extends Model {
    static init(sequelize) {
        super.init({
            codregisitro: Sequelize.INTEGER,
            razao_social: Sequelize.STRING,
            fantasia: Sequelize.STRING,
            cep: Sequelize.STRING,
            logradouro: Sequelize.STRING,
            numero: Sequelize.INTEGER,
            bairro: Sequelize.STRING,
            estado: Sequelize.STRING,
            cidade: Sequelize.STRING,
            email: Sequelize.STRING,
            telefone01: Sequelize.STRING,
            telefone02: Sequelize.STRING,
            status: Sequelize.INTEGER,
            intervalo_horario: Sequelize.INTEGER,
            prazo_cancelamento: Sequelize.INTEGER,
        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Sponsored;