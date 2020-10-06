import express from 'express';

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
        });

    }

}