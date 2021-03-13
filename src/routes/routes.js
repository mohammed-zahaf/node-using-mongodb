import { addNewProduct, getProducts, getProductWithID } from '../controllers/controllers';

export const routes = (app) => {
  app.route('/product').post(addNewProduct);
  app.route('/products').get(getProducts);
  app.route('/products/:ProductID').get(getProductWithID);
};

export default {
  routes,
};
