import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Appointment from '../app/models/Appointment';
import Avatar from '../app/models/Avatar';
import Client from '../app/models/Client';
import Function from '../app/models/Function';
import Point from '../app/models/Point';
import PointsRescue from '../app/models/PointsRescue';
import Product from '../app/models/Product';
import Professional from '../app/models/Professional';
import Schedule from '../app/models/Schedule';
import Sponsored from '../app/models/Sponsored';
import User from '../app/models/User';
import Workday from '../app/models/Workday';

const models = [ Appointment, Avatar, Client, Function, Point, PointsRescue, Product, Professional, Schedule, Sponsored, User, Workday ];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models.map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();