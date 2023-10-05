let items = require('../config/data.json').items;

module.exports.updateItem = async (event) => {
  try{
    const id = event.pathParameters.id;
    const item = JSON.parse(event.body);
    const exist = false;

    items = items.map(data => {
      if(data.id == id){
        exist = true;
          for (const key in item) {
              if (Object.hasOwnProperty.call(data, key)) {
                  data[key] = item[key];                
              }
          }
      }
      return data;
    })

    if(!exist)
      throw new URIError('No existe el item.');
  
    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch(e) {
      return {
        statusCode: e instanceof URIError ? 404 : 500,
        body: JSON.stringify({
          message: 'Hubo un problema al intentar actualizar el item.',
          error: e.message
        })
      };
  }
};