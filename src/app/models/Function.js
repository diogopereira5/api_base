import Sequelize, { Model } from 'sequelize';

class Function extends Model {
    static init(sequelize) {
        super.init({
            id_empresa: Sequelize.INTEGER,
            nome: Sequelize.STRING,
            status: Sequelize.INTEGER,

        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Function;