import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { routes } from './src/routes/routes';

const app = express();
const PORT = 4000;
const DB_NAME = 'PRODUCT_DB';

// Setting modules
mongoose.Promise = global.Promise;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mongoose connection
mongoose.connection.on('open', () => console.log('Connected to mongo server.'));
mongoose.connection.on('error', (err) => {
  console.log('Could not connect to mongo server!');
  return console.log(err);
});
mongoose.connect(`mongodb://localhost/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo connected...'));

// Routes
app.get('/', (req, res) => res.send(`Store server running on port ${PORT}`));
routes(app);

// Starting server
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
