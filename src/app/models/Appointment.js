import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
    static init(sequelize) {
        super.init({
            id_empresa: Sequelize.INTEGER,
            situacao: Sequelize.STRING,
            id_cliente: Sequelize.INTEGER,
            id_produto: Sequelize.INTEGER,
            data: Sequelize.DATE,
        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Appointment;