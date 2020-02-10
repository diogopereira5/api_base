import Sequelize, { Model } from 'sequelize';

class Workday extends Model {
    static init(sequelize) {
        super.init({
            id_empresa: Sequelize.INTEGER,
            dia_semana: Sequelize.STRING,
            hora_inicio: Sequelize.DATE,
            hora_final: Sequelize.DATE,
        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Workday;