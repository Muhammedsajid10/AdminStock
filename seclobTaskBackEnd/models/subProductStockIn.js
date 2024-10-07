// import mongoose from "mongoose";

// const subProductStock = new mongoose.Schema({
//     subProduct : { type: mongoose.Schema.Types.ObjectId, ref: 'SubProduct', required: true },
//     stockIN : { type: mongoose.Schema.Types.ObjectId, ref: 'Franchise', required: true },  // Fix typo: stokIN -> stockIN
//     date: { type: Date, default: Date.now }
// });

// const subProductStockModel = mongoose.model('SubProductStock', subProductStock);  // Fix typo: subProductStoock -> SubProductStock

// export default subProductStockModel;








// import mongoose from 'mongoose';

// const subProductStockSchema = new mongoose.Schema({
//     subProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'SubProduct', required: true },  // Link to the sub-product
//     franchise: { type: mongoose.Schema.Types.ObjectId, ref: 'Franchise', required: true },  // Link to the franchise performing the operation
//     quantity: { type: Number, required: true },  // Quantity of stock being added or removed
//     operationtype: { type: String, enum: ['stock-in', 'stock-out'], required: true },  // Type of operation (stock-in or stock-out)
//     date: { type: Date, default: Date.now }  // Date of the stock operation
// });

// const SubProductStock = mongoose.model('SubProductStock', subProductStockSchema);

// export default SubProductStock;





import mongoose from 'mongoose';

const subProductStockSchema = new mongoose.Schema({
    subProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'SubProduct', required: true },
    franchise: { type: mongoose.Schema.Types.ObjectId, ref: 'Franchise', required: true, unique: true },
    quantity: { type: Number, required: true },
    operationtype: {
        type: String,
        enum: ['stockIn', 'stockOut'], // Allow only 'stockIn' and 'stockOut' as valid values
        required: true
    },
    date: { type: Date, default: Date.now }
});

const SubProductStock = mongoose.model('SubProductStock', subProductStockSchema);

export default SubProductStock;


















// import mongoose from "mongoose";

// const subProductStock = new mongoose.Schema({
//     subProduct : { type: mongoose.Schema.Types.ObjectId, ref: 'SubProduct', required: true },
//     stockIN : { type: mongoose.Schema.Types.ObjectId, ref: 'Franchise', required: true },
//     quantity : { type: Number, required: true },
//     type: { type: String, enum: ['StockIn', 'StockOut'], required: true },  // Track whether it's StockIn or StockOut
//     date: { type: Date, default: Date.now }
// });

// const subProductStockModel = mongoose.model('SubProductStock', subProductStock);

// export default subProductStockModel;
