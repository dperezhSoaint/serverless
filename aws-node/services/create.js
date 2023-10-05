const items = require('../config/data.json').items;

module.exports.createItem = async (event) => {
  const item = JSON.parse(event.body)
  items.push(item)
  return {
    statusCode: 201,
    body: JSON.stringify(items),
  };
};