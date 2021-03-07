import mongoose from 'mongoose';

const { Schema } = mongoose;
export const ProductSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  created_date: {
    type: Date,
    default: Date.now,
  },
});
export const Product = mongoose.model('Product', ProductSchema);
export default {
  ProductSchema,
  Product,
};
