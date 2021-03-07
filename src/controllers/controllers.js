import mongoose from 'mongoose';
import { ProductSchema } from '../models/models';

const Product = mongoose.model('Product', ProductSchema);

export const addNewProduct = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(product);
  });
};

export default {
  addNewProduct,
};
