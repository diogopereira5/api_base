import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init({
            id_empresa: Sequelize.INTEGER,
            descricao: Sequelize.STRING,
            preco_custo: Sequelize.REAL,
            preco_venda: Sequelize.REAL,
            foto: Sequelize.INTEGER,
            qtd_pontos: Sequelize.INTEGER,
            tipo: Sequelize.INTEGER,
            status: Sequelize.INTEGER,
        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Product;