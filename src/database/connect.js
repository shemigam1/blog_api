import pkg from 'mongoose';
const { connect, connection } = pkg;
import 'dotenv/config'

//create connection and export as a singleton
connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

const conn = connection;

export default conn;