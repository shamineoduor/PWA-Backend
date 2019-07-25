// Initializes the `expenses` service on path `/expenses`
const createService = require('feathers-sequelize');
const createModel = require('../../models/expenses.model');
const hooks = require('./expenses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/expenses', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('expenses');

  service.hooks(hooks);
};
