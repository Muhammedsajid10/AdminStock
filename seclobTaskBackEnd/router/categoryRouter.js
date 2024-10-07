import express from 'express';
import createCategory from '../controllers/categoryCreate.js';
import authenticateToken from '../middleware/protect.js';

const categoryRouter = express.Router();

categoryRouter.use(authenticateToken)

categoryRouter.route('/category')
    .post(createCategory)
    .get(createCategory);

categoryRouter.route('/category/:id')
    .get(createCategory)
    .put(createCategory)
    .delete(createCategory);


export default categoryRouter;

