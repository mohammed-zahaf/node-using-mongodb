import { addNewProduct } from '../controllers/controllers';

function routes(app) {
  app.route('/products').post(addNewProduct);
}

export default {
  routes,
};
