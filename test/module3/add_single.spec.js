const fs = require('fs');
const expect = require('expect.js');

describe('Creating documents', () => {
  it('Create the model and schema @model-create', (done) => {
    try {
      expect(fs.readFileSync('src/models/models.js').toString())
        .to.contain('export const ProductSchema = new Schema({');
      expect(fs.readFileSync('src/models/models.js').toString())
        .to.contain('const { Schema } = mongoose;');
      done();
    } catch (error) {
      done(new Error('No schema detected in your code'));
    }
  });

  it('creates controler for route @controller-create', (done) => {
    try {
      expect(fs.readFileSync('src/controllers/controllers.js').toString())
        .to.contain('export const addNewProduct = (req, res) => {');
      expect(fs.readFileSync('src/controllers/controllers.js').toString())
        .to.contain('newProduct.save((err, product) => {');
      done();
    } catch (error) {
      done(new Error('No controllers for POST endpoint detected'));
    }
  });

  it('creates a new product @route-create', (done) => {
    try {
      expect(fs.readFileSync('src/routes/routes.js').toString())
        .to.contain("app.route('/products')");
      expect(fs.readFileSync('src/routes/routes.js').toString())
        .to.contain('.post(addNewProduct);');
      done();
    } catch (error) {
      done(new Error('No routes for POST endpoint detected'));
    }
  });
});
