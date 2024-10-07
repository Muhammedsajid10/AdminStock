import express from 'express';
import createFranchise from '../controllers/franchiseCreate.js';
import authenticateToken from '../middleware/protect.js';
 

const franchiseRouter = express.Router();

// const middleware = [authenticateToken]

franchiseRouter.use(authenticateToken)



franchiseRouter.route('/franchise')
    .post(createFranchise)
    .get(createFranchise);

franchiseRouter.route('/franchise/:id')
    .get(createFranchise)
    .put(createFranchise)
    .delete(createFranchise);
export default franchiseRouter;






// import express from 'express';
// import createFranchise from '../controllers/franchiseCreate.js';
// import authenticateToken from '../middleware/protect.js';

// const franchiseRouter = express.Router();

// franchiseRouter.use((req, res, next) => {
//   console.log('Middleware is running');  // Add this to check if middleware is called
//   next();
// });

// franchiseRouter.use(authenticateToken);

// franchiseRouter.route('/franchise')
//     .post(createFranchise)
//     .get(createFranchise);

// franchiseRouter.route('/franchise/:id')
//     .get(createFranchise)
//     .put(createFranchise)
//     .delete(createFranchise);

// export default franchiseRouter;
