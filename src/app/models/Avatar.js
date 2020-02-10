import Sequelize, { Model } from 'sequelize';

class Avatar extends Model {
    static init(sequelize) {
        super.init({

            id_empresa: Sequelize.INTEGER,
            id_usuario: Sequelize.INTEGER,
            url_avatar: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `http://localhost:3334/files/${this.path}`
                },
            },

        },
            {
                sequelize,
            }
        );

        return this;

    }

}

export default Avatar;