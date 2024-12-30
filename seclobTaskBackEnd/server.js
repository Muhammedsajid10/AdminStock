import express from 'express';
import connection from './mongoDb/mongoose.js';
import dotenv from 'dotenv';
import cors from 'cors'
import router from './router/router.js';
import franchiseRouter from './router/franchiseRouter.js';
import categoryRouter from './router/categoryRouter.js';
import productRouter from './router/productRouter.js';
import subproductRouter from './router/subProductRouter.js';
import SubStockRouter from './router/subProdStock.js';

const app = express();

connection();

dotenv.config();

app.use(express.json());
app.use(cors())
app.use('/', router);
app.use('/fran',franchiseRouter)
app.use('/cate',categoryRouter)
app.use('/product',productRouter)
app.use('/subProduct',subproductRouter)
app.use('/subProdStock',SubStockRouter)

app.use((req, res, next) => {
    res.status(404).json('Page not found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});














// import express from 'express';
// import connection from './mongoDb/mongoose.js';
// import dotenv from 'dotenv';  // Import dotenv before other configurations
// import cors from 'cors';
// import router from './router/router.js';
// import franchiseRouter from './router/franchiseRouter.js';
// import categoryRouter from './router/categoryRouter.js';
// import productRouter from './router/productRouter.js';
// import subproductRouter from './router/subProductRouter.js';

// dotenv.config();  // Load environment variables
// console.log('JWT_SECRET from .env:', process.env.JWT_SECRET);  // Check if secret is loaded

// const app = express();
// connection();

// app.use(express.json());
// app.use(cors());

// app.use('/', router);
// app.use('/fran', franchiseRouter);
// app.use('/cate', categoryRouter);
// app.use('/product', productRouter);
// app.use('/subProduct', subproductRouter);

// // 404 handler
// app.use((req, res, next) => {
//     res.status(404).json('Page not found');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

