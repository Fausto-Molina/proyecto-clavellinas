// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const dbConetion = async() => {
    try {
        await mongoose.connect(process.env.MONGOODB_CNX, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Base de datos online')
    } catch (error) {
        throw new Error('Error al iniciar la base de datos');
    }

};
export default dbConetion;