import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 3003;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', async (_req: Request, res: Response) => {
    res.render('../view/home');
});

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}
