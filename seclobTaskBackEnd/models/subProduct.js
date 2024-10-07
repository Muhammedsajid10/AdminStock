// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   subProductCode: { type: String, required: true , unique: true},
//   subProductName: { type: String, required: true },
//   subProductMinQuantity: { type: Number, required: true }, 
//   subProductPrice: { type: Number, required: true },
//   subProductDescription: { type: String, required: true }
// });

// const subproductModel = mongoose.model('subProducts', productSchema);

// export default subproductModel;









// import mongoose from 'mongoose';

// const subProductSchema = new mongoose.Schema({
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     subProductCode: { type: String, required: true },
//     subProductName: { type: String, required: true },
//     subProductMinQuantity: { type: Number, required: true },
//     subProductPrice: { type: Number, required: true },
//     subProductDescription: { type: String }
// });

// const SubProduct = mongoose.model('SubProduct', subProductSchema);

// export default SubProduct;




import mongoose from 'mongoose';

const subProductSchema = new mongoose.Schema({
    subProductCode: { type: String, required: true },
    subProductName: { type: String, required: true },
    subProductMinQuantity: { type: Number, required: true },
    subProductPrice: { type: Number, required: true },
    subProductDescription: { type: String }
});

const SubProduct = mongoose.model('SubProduct', subProductSchema);

export default SubProduct;
