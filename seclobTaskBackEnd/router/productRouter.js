// import express from 'express';
// import createProduct from '../controllers/productCreate.js';


// const productRouter = express.Router();


// productRouter.route('/products')
//     .post(createProduct)  
//     .get(createProduct); 


// productRouter.route('/products/:id')
//     .get(createProduct)   
//     .put(createProduct)    
//     .delete(createProduct);  

// export default productRouter;
















import express from 'express';
import createProduct from '../controllers/productCreate.js';
import authenticateToken from '../middleware/protect.js';
 

const productRouter = express.Router();

// const middleware = [authenticateToken]

productRouter.use(authenticateToken)

// productRouter.get('/products', getProducts);

productRouter.route('/products')
    .post(createProduct) 
    .get(createProduct); 

productRouter.route('/productssss/:id')   
    .get(createProduct)  
    .put(createProduct)  
    .delete(createProduct); 

export default productRouter;
