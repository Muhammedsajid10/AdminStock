// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   ProductCode: { type: String, required: true , unique: true},
//   ProductName: { type: String, required: true },
//   ProductQuantity: { type: Number, required: true },
//   Category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },  
//   ProductPrice: { type: Number, required: true },
//   ProductDescription: { type: String, required: true }

// });

// const productModel = mongoose.model('Products', productSchema);

// export default productModel;







// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   ProductCode: { type: String, required: true, unique: true },
//   ProductName: { type: String, required: true },
//   ProductQuantity: { type: Number, required: true },
//   Category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
//   ProductPrice: { type: Number, required: true },
//   ProductDescription: { type: String, required: true },
//   subProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'subProducts' }]  
// });

// const productModel = mongoose.model('Products', productSchema);

// export default productModel;









import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  ProductCode: { type: String, required: true, unique: true },
  ProductName: { type: String, required: true },
  ProductQuantity: { type: Number, required: true },
  Category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
  ProductPrice: { type: Number, required: true },
  ProductDescription: { type: String, required: true },
  subProducts: [
    {

      subProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'SubProduct', required: true },
      subProductQuantity: { type: Number, required: true }  
    }
    
  ]
});

const productModel = mongoose.model('Products', productSchema);

export default productModel;






// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   ProductCode: { type: String, required: true, unique: true },
//   ProductName: { type: String, required: true },
//   ProductQuantity: { type: Number, required: true },
//   Category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
//   ProductPrice: { type: Number, required: true },
//   ProductDescription: { type: String, required: true },
//   subProducts: [
//     {
//       subProductId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubProduct', required: true }, 
//       quantity: { type: Number, required: true }
//     }
//   ]
// });

// const productModel = mongoose.model('Products', productSchema);

// export default productModel;


