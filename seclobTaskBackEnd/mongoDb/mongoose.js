// const mongoose = require('mongoose')
// const uri = "mongodb+srv://sajidalhijas:seclob@seclobproject.12eao.mongodb.net/?retryWrites=true&w=majority&appName=SeclobProject"

// const connection = async () => {
//     try {
//         const connect = await mongoose.connect(
//             uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }
//         )
//         console.log("DataBase Connected Successfully..");
//     } catch (error) {
//         console.log(`DataBase Error is : ${error}`);
//         process.exit();
//     }

// }

// module.exports = connection;




















import mongoose from 'mongoose';

const uri = "mongodb+srv://sajidalhijas:seclob@seclobproject.12eao.mongodb.net/?retryWrites=true&w=majority&appName=SeclobProject";

const connection = async () => {
    try {
        const connect = await mongoose.connect(uri);
        console.log("Database Connected Successfully..");
    } catch (error) {
        console.log(`Database Error: ${error}`);
        process.exit(1);  // Exit with failure code
    }
};

export default connection;
