import { addNewProduct, getProducts, getProductWithID } from '../controllers/controllers';

function routes(app) {
  app.route('/product').post(addNewProduct);
  app.get('/products').post(getProducts);
  app.get('/products/:ProductID').post(getProductWithID);
}

export default {
  routes,
};
