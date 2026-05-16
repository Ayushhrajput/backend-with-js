import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({path: './.env'})
const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`app is running on the port ${PORT}`);
    }).on("err", (err) => {
        console.log(err, "error")
    })
})
.catch((err) => {
    console.log(err, "mongodb connection failed")
})


