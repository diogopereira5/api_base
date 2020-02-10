import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
    static init(sequelize) {
        super.init({
            id_empresa: Sequelize.INTEGER,
            id_appointment: Sequelize.INTEGER,
        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Appointment;