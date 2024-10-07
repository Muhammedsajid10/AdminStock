import express from 'express';
import authenticateToken from '../middleware/protect.js';
import {getFilteredSubProdStock, stockOperation} from '../controllers/subProdStockOpertion.js';


const SubStockRouter = express.Router()

SubStockRouter.use(authenticateToken);

SubStockRouter.post('/stock-in-out', stockOperation);
SubStockRouter.get('/filter-stock', getFilteredSubProdStock);

export default SubStockRouter;