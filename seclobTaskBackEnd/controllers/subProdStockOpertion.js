
// import SubProduct from '../models/subProduct.js';
// import SubProductStock from '../models/subProductStockIn.js'


// // Add stockIn or stockOut
// const stockOperation = async (req, res) => {
//     const { subProduct, franchise, quantity, operationtype } = req.body;

//     try {
//         // Create a new stock operation (stockIn or stockOut)
//         const stockEntry = new SubProductStock({
//             subProduct,
//             franchise,
//             quantity,
//             operationtype
//         });

//         // Save the stock operation
//         await stockEntry.save();

//         // Update the sub-product quantity based on stockIn or stockOut
//         const subProductToUpdate = await SubProduct.findById(subProduct);
//         console.log("subProductToUpdate : ",subProductToUpdate);
        

//         if (operationtype === 'stockIn') {
//             subProductToUpdate.subProductMinQuantity += quantity;  // Add to the existing quantity
//         } else if (operationtype === 'stockOut') {
//             subProductToUpdate.subProductMinQuantity -= quantity;  // Subtract from the existing quantity
//             if (subProductToUpdate.subProductMinQuantity < 0) {
//                 return res.status(400).json({ message: "Insufficient stock for this operation" });
//             }
//         }

//         // Save updated sub-product
//         await subProductToUpdate.save();

//         res.status(200).json({ message: `${operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'} operation successfully completed!` });
//     } catch (error) {
//         console.error('Error in stock operation:', error);
//         res.status(500).json({ message: 'An error occurred while processing the stock operation' });
//     }
// };


// export default stockOperation;





















import SubProduct from '../models/subProduct.js';
import SubProductStock from '../models/subProductStockIn.js';

// Add stockIn or stockOut
const stockOperation = async (req, res) => {
    const { subProduct, franchise, quantity, operationtype } = req.body;

    try {
        // Create a new stock operation (stockIn or stockOut)
        const stockEntry = new SubProductStock({
            subProduct,
            franchise,
            quantity: parseInt(quantity, 10), // Ensure the quantity is treated as a number
            operationtype
        });

        // Save the stock operation
        await stockEntry.save();

        // Update the sub-product quantity based on stockIn or stockOut
        const subProductToUpdate = await SubProduct.findById(subProduct);

        if (!subProductToUpdate) {
            return res.status(404).json({ message: 'SubProduct not found' });
        }

        const parsedQuantity = parseInt(quantity, 10);  // Ensure the quantity is treated as a number

        if (operationtype === 'stockIn') {
            subProductToUpdate.subProductMinQuantity += parsedQuantity;  // Add to the existing quantity
        } else if (operationtype === 'stockOut') {
            subProductToUpdate.subProductMinQuantity -= parsedQuantity;  // Subtract from the existing quantity
            if (subProductToUpdate.subProductMinQuantity < 0) {
                return res.status(400).json({ message: "Insufficient stock for this operation" });
            }
        }

        // Save updated sub-product
        await subProductToUpdate.save();

        res.status(200).json({ message: `${operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'} operation successfully completed!` });
    } catch (error) {
        console.error('Error in stock operation:', error);
        res.status(500).json({ message: 'An error occurred while processing the stock operation' });
    }
};






// Get filtered or searched stock operations
const getFilteredSubProdStock = async (req, res) => {
    const { franchise, subProductSearch } = req.query; // Capture filters from query parameters

    try {
        // Build the filter object
        let filter = {};

        // Filter by franchise if provided
        if (franchise) {
            filter.franchise = franchise;
        }

        // Search by sub-product name or sub-product ID if provided
        if (subProductSearch) {
            const subProducts = await SubProduct.find({
                subProductName: { $regex: subProductSearch, $options: 'i' } // Case-insensitive search
            });

            const subProductIds = subProducts.map(subProd => subProd._id);
            filter.subProduct = { $in: subProductIds };
        }

        // Find stock operations based on the filter
        const stockOperations = await SubProductStock.find(filter)
            .populate('subProduct') // Populate sub-product details
            .populate('franchise')  // Populate franchise details
            .exec();

        res.status(200).json(stockOperations);
    } catch (error) {
        console.error('Error fetching stock operations:', error);
        res.status(500).json({ message: 'An error occurred while fetching stock operations' });
    }
};

 

// const getFilteredSubProdStock = async (req, res) => {
//     const { franchise, subProductSearch } = req.query; // Capture filters from query parameters

//     try {
//         // Build the filter object
//         let filter = {};

//         // Filter by franchise if provided
//         if (franchise) {
//             filter.franchise = franchise;
//         }

//         // Search by sub-product name or sub-product ID if provided
//         if (subProductSearch) {
//             const subProducts = await SubProduct.find({
//                 subProductName: { $regex: subProductSearch, $options: 'i' } // Case-insensitive search
//             });

//             const subProductIds = subProducts.map(subProd => subProd._id);
//             filter.subProduct = { $in: subProductIds };
//         }

//         // Use aggregate to group by subProduct and franchise to remove duplicates
//         const stockOperations = await SubProductStock.aggregate([
//             { $match: filter },  // Apply the filter
//             { 
//                 $lookup: { 
//                     from: 'subproducts', 
//                     localField: 'subProduct', 
//                     foreignField: '_id', 
//                     as: 'subProductDetails' 
//                 }
//             },
//             {
//                 $lookup: {
//                     from: 'franchises', // Assuming franchise collection is called 'franchises'
//                     localField: 'franchise',
//                     foreignField: '_id',
//                     as: 'franchiseDetails'
//                 }
//             },
//             {
//                 $unwind: "$subProductDetails"
//             },
//             {
//                 $unwind: "$franchiseDetails"
//             },
//             {
//                 $group: {
//                     _id: { subProduct: "$subProduct", franchise: "$franchise" }, // Group by subProduct and franchise
//                     subProductDetails: { $first: "$subProductDetails" },
//                     franchiseDetails: { $first: "$franchiseDetails" },
//                     totalQuantity: { $sum: "$quantity" }, // Sum the quantity if required
//                     stockInOperations: { $push: "$operationtype" } // Store all stockIn/stockOut operations
//                 }
//             },
//             {
//                 $project: {
//                     _id: 0,  // Remove the _id field from the result
//                     subProductDetails: 1,
//                     franchiseDetails: 1,
//                     totalQuantity: 1,
//                     stockInOperations: 1
//                 }
//             }
//         ]);

//         res.status(200).json(stockOperations);
//     } catch (error) {
//         console.error('Error fetching stock operations:', error);
//         res.status(500).json({ message: 'An error occurred while fetching stock operations' });
//     }
// };



export  {stockOperation ,getFilteredSubProdStock}
