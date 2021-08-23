import 'reflect-metadata';
import { createConnection, getRepository } from 'typeorm';
import express from 'express';
import { Request, Response } from 'express';
import { Routes } from './routes';
import path from 'path';
import { job } from './nodeScheduler/checkDB';
import multer from 'multer';

import dotenv from 'dotenv';
import { Email } from './entity/Email';
dotenv.config();

const upload = multer({ dest: 'uploads/' });

createConnection()
    .then(async (connection) => {
        // create express app
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.set('view engine', 'ejs');
        app.set('views', path.resolve(__dirname + '/../view'));
        app.use(express.static(path.resolve(__dirname + '/../view')));

        app.get('/', (req: Request, res: Response) => {
            res.render('home');
        });

        app.use(
            '/submit',
            upload.single('image'),
            async (req: Request, res: Response) => {
                const emailRepo = getRepository(Email);
                const newEmail = await emailRepo.save({
                    ...req.body,
                    uploadedImage: req.file ? req.file.path : null,
                    originalFileName: req.file ? req.file.originalname : null
                });
                const urlencoded = encodeURIComponent(JSON.stringify(newEmail));
                res.redirect('/confirmed?data=' + urlencoded);
            }
        );

        app.get('/confirmed', (req: Request, res: Response) => {
            const data = req.query.data as string;
            res.json(JSON.parse(data));
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

        // start express server
        app.listen(3003);

        job();

        console.log(
            'Express server has started on port 3003. Open http://localhost:3003'
        );
    })
    .catch((error) => console.log(error));
