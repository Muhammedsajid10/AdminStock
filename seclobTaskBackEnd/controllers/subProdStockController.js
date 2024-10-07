// import subProductStockModel from "../models/subProductStockIn.js";


// const createStockIn = async (req, res) => {
//     try {
//         const { subProduct, stockIN, quantity } = req.body;  
//         const stockINDetails = await subProductStockModel.create({
//             subProduct,
//             stockIN,  
//             quantity
//         });

//         res.status(201).json(stockINDetails);
//     } catch (error) {
//         console.error("Error creating StockIN entry:", error);
//         res.status(500).json({ error: 'Failed to create StockIN entry' });
//     }
// };

// const getAllStockIn = async (req, res) => {
//     try {
//         const stockIns = await subProductStockModel.find().populate('subProduct stockIN');  
//         res.status(200).json(stockIns);
//     } catch (error) {
//         console.error("Error fetching StockIN entries:", error);
//         res.status(500).json({ error: 'Failed to fetch StockIN entries' });
//     }
// };









// const createStockOut = async (req, res) => {
//     try {
//         const { subProduct, stockIN, quantity } = req.body;

//         // Check current stock quantity for the subProduct
//         const totalStock = await subProductStockModel.aggregate([
//             { $match: { subProduct } },
//             { 
//                 $group: {
//                     _id: "$subProduct",
//                     totalQuantity: {
//                         $sum: {
//                             $cond: [
//                                 { $eq: ["$type", "StockIn"] }, "$quantity",
//                                 { $multiply: ["$quantity", -1] } // Subtract StockOut quantities
//                             ]
//                         }
//                     }
//                 }
//             }
//         ]);

//         const availableQuantity = totalStock.length > 0 ? totalStock[0].totalQuantity : 0;

//         // Ensure there's enough stock to proceed with StockOut
//         if (quantity > availableQuantity) {
//             return res.status(400).json({ error: "Insufficient stock available" });
//         }

//         // Proceed with creating StockOut entry
//         const stockOutDetails = await subProductStockModel.create({
//             subProduct,
//             stockIN,
//             quantity,
//             type: 'StockOut'  // Mark this as StockOut
//         });

//         res.status(201).json(stockOutDetails);
//     } catch (error) {
//         console.error("Error creating StockOut entry:", error);
//         res.status(500).json({ error: 'Failed to create StockOut entry' });
//     }
// };

// const getAllStockOut = async (req, res) => {
//     try {
//         const stockOuts = await subProductStockModel.find({ type: 'StockOut' }).populate('subProduct stockIN');
//         res.status(200).json(stockOuts);
//     } catch (error) {
//         console.error("Error fetching StockOut entries:", error);
//         res.status(500).json({ error: 'Failed to fetch StockOut entries' });
//     }
// };










// export { createStockIn, getAllStockIn, createStockOut, getAllStockOut }
























// import SubProductStock from '../models/subProductStockIn.js';
// import SubProduct from '../models/subProduct.js'; 
