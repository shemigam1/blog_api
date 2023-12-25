import express from 'express'
import cors from 'cors'
import conn from './src/db/connect.js'
import apiRouter from './src/routes/index.js'

const app = express()
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', apiRouter);

const PORT = 8080

app.use('**', (req, res) => {
    return res.status(404).send('NOT FOUND');
});

app.listen(PORT, async () => {
    console.log('connect init');
    await conn;
    console.log(`Listening on http://localhost:${PORT}`);
});