import express from 'express';
import { User } from '../models/user'

export class UsersRouter {

    constructor(services) {
        this.prefix = 'users';
        this.services = services;
        this.express = express.Router();
        this.init();
    }

    init() {
        console.log('Starting users router...');
        this.express.route('/').get(async (req, res, next) => {
            // try {
            //     const mobiData = await this.services.mobilize.getGroups(req.query);
            //     return next(mobiData);
            // } catch (e) {
            //     let content = this.services.parsing.parseMobiError(e);
            //     return next(content);
            // }
            res.send('FART!!!')
        });
        this.express.route('/users').post(async (req, res, next) => {
            try {
                let user = new User(req.body);
                user = await user.save()
                return next(user);
            } catch (e) {
                let content = this.services.parsing.parseError(e);
                return next(content);
            }
        });

    }

}