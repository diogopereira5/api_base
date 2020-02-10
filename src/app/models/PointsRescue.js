import Sequelize, { Model } from 'sequelize';

class PointsRescue extends Model {
    static init(sequelize) {
        super.init({
            id_empresa: Sequelize.INTEGER,
            id_cliente: Sequelize.INTEGER,
            id_produto: Sequelize.INTEGER,
            data_resgate: Sequelize.DATE,
        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default PointsRescue;