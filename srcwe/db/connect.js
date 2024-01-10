import mongoose from "mongoose";


const uri = "mongodb+srv://semilore:semilore@blog-api.fzscoco.mongodb.net/?retryWrites=true&w=majority"

const conn = mongoose.connect(uri, {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });


export default conn