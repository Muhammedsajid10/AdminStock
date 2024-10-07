// import subproductModel from "../models/subProduct.js";


// const subcreateProduct = async (req, res) => {
//     const getId = req.params.id;


//     if (req.method === 'POST') {
//         try {
//             const { subProductCode, subProductName, subProductMinQuantity,  subProductPrice, subProductDescription } = req.body;
//             const subproductDetails = await subproductModel.create({
//                 subProductCode, subProductName, subProductMinQuantity,  subProductPrice, subProductDescription
//             });
//             res.status(201).json(subproductDetails);
//         } catch (error) {
//             console.error('Error creating product:', error);
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     }
    
    
//     else if (req.method === 'GET') {
//         try {
//             if (getId) {
//                 const subproduct = await subproductModel.findById(getId);
//                 if (!subproduct) {
//                     return res.status(404).json({ message: 'subProduct not found' });
//                 }
//                 res.json(subproduct);
//             } else {
//                 const subproducts = await subproductModel.find();
//                 res.json(subproducts);
//             }
//         } catch (error) {
//             console.error('Error fetching subproduct:', error);
//             res.status(500).json({ message: `The GET error is: ${error}` });
//         }
//     }
    

//     else if (req.method === 'PUT') {
//         try {
//             const { subProductCode, subProductName, subProductMinQuantity,  subProductPrice, subProductDescription } = req.body;
//             const subproductUpdate = await subproductModel.findByIdAndUpdate(
//                 getId,
//                 { subProductCode, subProductName, subProductMinQuantity,  subProductPrice, subProductDescription },
//                 { new: true } // Returns the updated document
//             );
//             if (!subproductUpdate) {
//                 return res.status(404).json({ message: 'subProduct not found' });
//             }
//             res.json(subproductUpdate);
//         } catch (error) {
//             console.error('Error updating subproduct:', error);
//             res.status(500).json({ message: `The update error is: ${error}` });
//         }
//     }
    
    
//     else if (req.method === 'DELETE') {
//         try {
//             const subproductDelete = await subproductModel.findByIdAndDelete(getId);
//             if (!subproductDelete) {
//                 return res.status(404).json({ message: 'Product not found' });
//             }
//             res.json({ message: 'Product deleted successfully' });
//         } catch (error) {
//             console.error('Error deleting product:', error);
//             res.status(500).json({ message: `The delete error is: ${error}` });
//         }
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// };

// export default subcreateProduct;



















// import subproductModel from "../models/subProduct.js";

// const subcreateProduct = async (req, res) => {
//     const getId = req.params.id; // for single subproduct by id
//     const productId = req.params.productId; // for subproducts related to a specific product

//     // Handle POST request for creating a new sub-product
//     if (req.method === 'POST') {
//         try {
//             const { subProductCode, subProductName, subProductMinQuantity, subProductPrice, subProductDescription, productId } = req.body;
//             const subproductDetails = await subproductModel.create({
//                 subProductCode, subProductName, subProductMinQuantity, subProductPrice, subProductDescription, productId
//             });
//             res.status(201).json(subproductDetails);
//         } catch (error) {
//             console.error('Error creating product:', error);
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     }

//     // Handle GET request for fetching sub-products
//     else if (req.method === 'GET') {
//         try {
//             if (getId) {
//                 // Fetch a single sub-product by ID
//                 const subproduct = await subproductModel.findById(getId);
//                 if (!subproduct) {
//                     return res.status(404).json({ message: 'subProduct not found' });
//                 }
//                 res.json(subproduct);
//             } else if (productId) {
//                 // Fetch sub-products related to a specific product
//                 const subproducts = await subproductModel.find({ productId });
//                 res.json(subproducts);
//             } else {
//                 // Fetch all sub-products
//                 const subproducts = await subproductModel.find();
//                 res.json(subproducts);
//             }
//         } catch (error) {
//             console.error('Error fetching subproduct:', error);
//             res.status(500).json({ message: `The GET error is: ${error}` });
//         }
//     }

//     // Handle PUT request for updating sub-products
//     else if (req.method === 'PUT') {
//         try {
//             const { subProductCode, subProductName, subProductMinQuantity, subProductPrice, subProductDescription } = req.body;
//             const subproductUpdate = await subproductModel.findByIdAndUpdate(
//                 getId,
//                 { subProductCode, subProductName, subProductMinQuantity, subProductPrice, subProductDescription },
//                 { new: true } // Returns the updated document
//             );
//             if (!subproductUpdate) {
//                 return res.status(404).json({ message: 'subProduct not found' });
//             }
//             res.json(subproductUpdate);
//         } catch (error) {
//             console.error('Error updating subproduct:', error);
//             res.status(500).json({ message: `The update error is: ${error}` });
//         }
//     }

//     // Handle DELETE request for deleting a sub-product
//     else if (req.method === 'DELETE') {
//         try {
//             const subproductDelete = await subproductModel.findByIdAndDelete(getId);
//             if (!subproductDelete) {
//                 return res.status(404).json({ message: 'subProduct not found' });
//             }
//             res.json({ message: 'subProduct deleted successfully' });
//         } catch (error) {
//             console.error('Error deleting subproduct:', error);
//             res.status(500).json({ message: `The delete error is: ${error}` });
//         }
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// };

// export default subcreateProduct;









import SubProduct from '../models/subProduct.js';  

const subcreateProduct = async (req, res) => {
    const { id } = req.params;

    if (req.method === 'POST') {
        try {
            const { subProductCode, subProductName, subProductMinQuantity, subProductPrice, subProductDescription } = req.body;
            const subproductDetails = await SubProduct.create({
                subProductCode, subProductName, subProductMinQuantity, subProductPrice, subProductDescription
            });
            res.status(201).json(subproductDetails);
        } catch (error) {
            console.error('Error creating subproduct:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else if (req.method === 'GET') {
        try {
            if (id) {
                // Fetch sub-products by productId
                const subproducts = await SubProduct.find({ productId: id });
                if (subproducts.length === 0) {
                    return res.status(404).json({ message: 'No sub-products found for this product' });
                }
                res.json(subproducts);
            } else {
                const subproducts = await SubProduct.find();
                res.json(subproducts);
            }
        } catch (error) {
            console.error('Error fetching subproducts:', error);
            res.status(500).json({ message: `Error fetching subproducts: ${error}` });
        }
    } else if (req.method === 'PUT') {
        try {
            const { subProductCode, subProductName, subProductMinQuantity, subProductPrice, subProductDescription } = req.body;
            const subproductUpdate = await SubProduct.findByIdAndUpdate(
                id,
                { subProductCode, subProductName, subProductMinQuantity, subProductPrice, subProductDescription },
                { new: true } // Returns the updated document
            );
            if (!subproductUpdate) {
                return res.status(404).json({ message: 'Sub-product not found' });
            }
            res.json(subproductUpdate);
        } catch (error) {
            console.error('Error updating subproduct:', error);
            res.status(500).json({ message: `Error updating subproduct: ${error}` });
        }
    } else if (req.method === 'DELETE') {
        try {
            const subproductDelete = await SubProduct.findByIdAndDelete(id);
            if (!subproductDelete) {
                return res.status(404).json({ message: 'Sub-product not found' });
            }
            res.json({ message: 'Sub-product deleted successfully' });
        } catch (error) {
            console.error('Error deleting subproduct:', error);
            res.status(500).json({ message: `Error deleting subproduct: ${error}` });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default subcreateProduct;
