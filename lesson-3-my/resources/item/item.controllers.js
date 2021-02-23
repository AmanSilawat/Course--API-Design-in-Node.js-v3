const { crudControllers } = require('../../utils/crud');
const { Item } = require('./item.model');

export default crudControllers(Item)
