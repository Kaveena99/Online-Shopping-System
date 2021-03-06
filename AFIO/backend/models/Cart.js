const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = mongoose.Schema({
    productName: {
        type: String
    },

    price:{
        type: String
    },

    discount: {
        type: String
    },

    category:{
      type: String
    },

    size:{
      type: String
    },

    quantity:{
      type:String
    },

    cusId:{
      type: String
  }

},{ timesamps: true})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = {Cart}