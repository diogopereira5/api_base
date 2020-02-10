import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init({
            id_empresa: Sequelize.INTEGER,
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            is_master: Sequelize.INTEGER,
            avatar: Sequelize.STRING,
            status: Sequelize.INTEGER,
        },
            {
                sequelize,
            }
        );

        //criptografia da senha
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;

    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }

}

export default User;