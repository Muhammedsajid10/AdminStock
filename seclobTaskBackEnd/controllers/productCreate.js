// import productModel from '../models/products.js';

// const createProduct = async (req, res) => {
//     const getId = req.params.id;


//     if (req.method === 'POST') {
//         try {
//             const { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription } = req.body;
//             const productDetails = await productModel.create({
//                 ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription
//             });
//             res.status(201).json(productDetails);
//         } catch (error) {
//             console.error('Error creating product:', error);
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     }
    
    
//     else if (req.method === 'GET') {
//         try {
//             if (getId) {
//                 const product = await productModel.findById(getId);
//                 if (!product) {
//                     return res.status(404).json({ message: 'Product not found' });
//                 }
//                 res.json(product);
//             } else {
//                 const products = await productModel.find();
//                 res.json(products);
//             }
//         } catch (error) {
//             console.error('Error fetching product:', error);
//             res.status(500).json({ message: `The GET error is: ${error}` });
//         }
//     }
    

//     else if (req.method === 'PUT') {
//         try {
//             const { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription } = req.body;
//             const productUpdate = await productModel.findByIdAndUpdate(
//                 getId,
//                 { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription },
//                 { new: true } // Returns the updated document
//             );
//             if (!productUpdate) {
//                 return res.status(404).json({ message: 'Product not found' });
//             }
//             res.json(productUpdate);
//         } catch (error) {
//             console.error('Error updating product:', error);
//             res.status(500).json({ message: `The update error is: ${error}` });
//         }
//     }
    
    
//     else if (req.method === 'DELETE') {
//         try {
//             const productDelete = await productModel.findByIdAndDelete(getId);
//             if (!productDelete) {
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

// export default createProduct;



























// import productModel from '../models/products.js';
// import categoryModel from '../models/category.js';  

// const createProduct = async (req, res) => {
//     const getId = req.params.id;
    
//     if (req.method === 'POST') {
//         try {
//             const { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription } = req.body;
            
//             // Check if the category exists
//             const categoryExists = await categoryModel.findById(Category);
//             if (!categoryExists) {
//                 return res.status(404).json({ message: 'Category not found' });
//             }

//             // Create the product with the existing category reference
//             const productDetails = await productModel.create({
//                 ProductCode,
//                 ProductName,
//                 ProductQuantity,
//                 Category,  // reference to the Category's ObjectId
//                 ProductPrice,
//                 ProductDescription
//             });
            
//             res.json(productDetails);
//         } catch (error) {
//             console.error('Error creating product:', error);
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     } else if (req.method === 'GET') {
//         try {
//             if (getId) {
//                 const product = await productModel.findById(getId).populate('Category'); 
//                 if (!product) {
//                     return res.status(404).json({ message: 'Product not found' });
//                 }
//                 res.json(product);
//             } else {
//                 const products = await productModel.find().populate('Category'); 
//                 res.json(products);
//             }
//         } catch (error) {
//             console.error('Error fetching products:', error);
//             res.status(500).json({ message: `The GET error is: ${error}` });
//         }
//     } else if (req.method === 'PUT') {
//         try {
//             const { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription } = req.body;
            
            
//             const categoryExists = await categoryModel.findById(Category);
//             if (!categoryExists) {
//                 return res.status(404).json({ message: 'Category not found' });
//             }

//             const productUpdate = await productModel.findByIdAndUpdate(
//                 getId, 
//                 { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription },
//                 { new: true }
//             );
            
//             if (!productUpdate) {
//                 return res.status(404).json({ message: 'Product not found' });
//             }
            
//             res.json(productUpdate);
//         } catch (error) {
//             console.error('Error updating product:', error);
//             res.status(500).json({ message: `The update error is: ${error}` });
//         }
//     } else if (req.method === 'DELETE') {
//         try {
//             const productDelete = await productModel.findByIdAndDelete(getId);
//             if (!productDelete) {
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

// export default createProduct;

















import productModel from '../models/products.js';
import categoryModel from '../models/category.js';
import subproductModel from '../models/subProduct.js';

const createProduct = async (req, res) => {
    const getId = req.params.id;
    
    if (req.method === 'POST') {
        try {
            const { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription, subProducts } = req.body;
            
           
            const categoryExists = await categoryModel.findById(Category);
            if (!categoryExists) {
                return res.status(404).json({ message: 'Category not found' });
            }

          
            const productDetails = await productModel.create({
                ProductCode,
                ProductName,
                ProductQuantity,
                Category,  
                ProductPrice,
                ProductDescription,
                subProducts  
            });
            
            res.json(productDetails);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else if (req.method === 'GET') {
        try {
            if (getId) {
                
                const product = await productModel.findById(getId).populate([{path:"Category"},{path:"subProducts.subProduct"}]);
                if (!product) {
                    return res.status(404).json({ message: 'Product not found' });
                }
                res.json(product);
            } else {
                
                const products = await productModel.find().populate('Category').populate('subProducts');
                res.json(products);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ message: `The GET error is: ${error}` });
        }
    } else if (req.method === 'PUT') {
        try {
            const { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription, subProducts } = req.body;

            const categoryExists = await categoryModel.findById(Category);
            if (!categoryExists) {
                return res.status(404).json({ message: 'Category not found' });
            }

            const productUpdate = await productModel.findByIdAndUpdate(
                getId, 
                { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription, subProducts },
                { new: true }
            ).populate('subProducts');
            
            if (!productUpdate) {
                return res.status(404).json({ message: 'Product not found' });
            }
            
            res.json(productUpdate);
        } catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ message: `The update error is: ${error}` });
        }
    } else if (req.method === 'DELETE') {
        try {
            const productDelete = await productModel.findByIdAndDelete(getId);
            if (!productDelete) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ message: `The delete error is: ${error}` });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default createProduct;








// const createProduct = async (req, res) => {
//     const getId = req.params.id;
    
//     if (req.method === 'POST') {
//       try {
//         const { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription, subProducts } = req.body;
  
//         const categoryExists = await categoryModel.findById(Category);
//         if (!categoryExists) {
//           return res.status(404).json({ message: 'Category not found' });
//         }
  
//         const productDetails = await productModel.create({
//           ProductCode,
//           ProductName,
//           ProductQuantity,
//           Category,
//           ProductPrice,
//           ProductDescription,
//           subProducts
//         });
  
//         res.json(productDetails);
//       } catch (error) {
//         console.error('Error creating product:', error);
//         res.status(500).json({ message: 'Internal server error' });
//       }
//     } else if (req.method === 'GET') {
//       try {
//         if (getId) {
//           // Populate 'Category' and 'subProducts', selecting the 'name' field from 'subProducts'
//           const product = await productModel.findById(getId)
//             .populate('Category') // Populate category
//             .populate({
//               path: 'subProducts.subProduct',
//               select: 'name' // Select only the 'name' field from 'subProducts'
//             });
  
//           if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//           }
//           res.json(product);
//         } else {
//           const products = await productModel.find()
//             .populate('Category')
//             .populate({
//               path: 'subProducts.subProduct',
//               select: 'name' // Select only the 'name' field from 'subProducts'
//             });
  
//           res.json(products);
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ message: `The GET error is: ${error}` });
//       }
//     } else if (req.method === 'PUT') {
//       try {
//         const { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription, subProducts } = req.body;
  
//         const categoryExists = await categoryModel.findById(Category);
//         if (!categoryExists) {
//           return res.status(404).json({ message: 'Category not found' });
//         }
  
//         const productUpdate = await productModel.findByIdAndUpdate(
//           getId, 
//           { ProductCode, ProductName, ProductQuantity, Category, ProductPrice, ProductDescription, subProducts },
//           { new: true }
//         ).populate({
//           path: 'subProducts.subProduct',
//           select: 'name' // Populate subProduct and fetch 'name' field only
//         });
  
//         if (!productUpdate) {
//           return res.status(404).json({ message: 'Product not found' });
//         }
  
//         res.json(productUpdate);
//       } catch (error) {
//         console.error('Error updating product:', error);
//         res.status(500).json({ message: `The update error is: ${error}` });
//       }
//     } else if (req.method === 'DELETE') {
//       try {
//         const productDelete = await productModel.findByIdAndDelete(getId);
//         if (!productDelete) {
//           return res.status(404).json({ message: 'Product not found' });
//         }
//         res.json({ message: 'Product deleted successfully' });
//       } catch (error) {
//         console.error('Error deleting product:', error);
//         res.status(500).json({ message: `The delete error is: ${error}` });
//       }
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
//   };
  
//   export default createProduct;
  