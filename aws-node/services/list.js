const items = require('../config/data.json').items;

module.exports.getItems = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};