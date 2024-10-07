// import express from 'express';
// import subcreateProduct from '../controllers/subProductCreate.js';
// import authenticateToken from '../middleware/protect.js';



// const subproductRouter = express.Router();

// subproductRouter.use(authenticateToken)


// subproductRouter.route('/subproducts')
//     .post(subcreateProduct)  
//     .get(subcreateProduct); 


// subproductRouter.route('/subproducts/:id')
//     .get(subcreateProduct)   
//     .put(subcreateProduct)    
//     .delete(subcreateProduct);  

// export default subproductRouter;


















import express from 'express';
import subcreateProduct from '../controllers/subProductCreate.js';
import authenticateToken from '../middleware/protect.js';


const subproductRouter = express.Router();

subproductRouter.use(authenticateToken);


subproductRouter.route('/subproducts')
    .post(subcreateProduct)  
    .get(subcreateProduct);  

// // Route for fetching sub-products by specific productId
// subproductRouter.route('/subproducts/by-product/:productId')
//     .get(subcreateProduct);  // GET: sub-products by productId


subproductRouter.route('/subproducts/:id')
    .get(subcreateProduct)   
    .put(subcreateProduct)   
    .delete(subcreateProduct); 





export default subproductRouter;
