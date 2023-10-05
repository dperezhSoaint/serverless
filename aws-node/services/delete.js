const items = require('../config/data.json').items;

module.exports.deleteItem = async (event) => {
  try {
    const id = parseInt(event.pathParameters.id);
    const index = items.findIndex(item => item.id === id);
  
    if (index > -1) {
      items.splice(index, 1);
    }
    else {
      throw new URIError('No existe el item.');
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch(e) {
      return {
        statusCode: e instanceof URIError ? 404 : 500,
        body: JSON.stringify({
          message: "Hubo un problema al intentar eliminar el item",
          error: e.message,
        })
      }
  }
};