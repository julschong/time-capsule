import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { Request, Response } from 'express';
import { Routes } from './routes';
import { User } from './entity/User';
import path from 'path';

createConnection()
    .then(async (connection) => {
        // create express app
        const app = express();
        app.use(express.json());

        app.set('view engine', 'ejs');
        app.set('views', path.resolve(__dirname + '/../view'));

        app.get('/', (req, res) => {
            res.render('home');
        });

        // register express routes from defined application routes
        Routes.forEach((route) => {
            (app as any)[route.method](
                route.route,
                (req: Request, res: Response, next: Function) => {
                    const result = new (route.controller as any)()[
                        route.action
                    ](req, res, next);
                    if (result instanceof Promise) {
                        result.then((result) =>
                            result !== null && result !== undefined
                                ? res.send(result)
                                : undefined
                        );
                    } else if (result !== null && result !== undefined) {
                        res.json(result);
                    }
                }
            );
        });

        // setup express app here
        // ...

        // start express server
        app.listen(3003);

        console.log(
            'Express server has started on port 3003. Open http://localhost:3003'
        );
    })
    .catch((error) => console.log(error));
