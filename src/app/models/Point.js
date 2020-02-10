import Sequelize, { Model } from 'sequelize';

class Point extends Model {
    static init(sequelize) {
        super.init({

            id_empresa: Sequelize.INTEGER,
            id_cliente: Sequelize.INTEGER,
            qtd_points: Sequelize.INTEGER,

        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Point;