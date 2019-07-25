const users = require('./users/users.service.js');
const expenses = require('./expenses/expenses.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(expenses);
};
