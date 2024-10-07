// import adminData from './Admin/adminData.js';
// import adminModel from './models/adminSchema.js';
// import connection from './mongoDb/mongoose.js';

// await connection();

// const adminDataImport = async () => {
//     try {
//         await adminModel.deleteMany();
//         const createAdmin = await adminModel.insertMany(adminData);
//         console.log("Created admin data: ", createAdmin);
//         process.exit();
//     } catch (error) {
//         console.error(`${error}`);
//         process.exit(1);
//     }
// };

// export default adminDataImport;






import adminData from './Admin/adminData.js';
import adminModel from './models/adminSchema.js';
import connection from './mongoDb/mongoose.js';

await connection();

const adminDataImport = async () => {
    try {
        
        const admin = await adminData();

        await adminModel.deleteMany();

        const createAdmin = await adminModel.insertMany([admin]); 

        console.log("Created admin data: ", createAdmin);
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

adminDataImport(); 

export default adminDataImport;

