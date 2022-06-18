const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user_id: { type: String, required: true },
  product_id: { type: String, required: true },
  order_status_id: { type: String, default: null },
  tax: { type: String,  default: null  },
  delivery_fee: { type: String,  default: null},
  cash_on_delivery_fee: { type: String,  default: null },
  active: { type: Boolean,  default: false  },
  delivery_address_id: { type: String,  default: null },
  payment_id: { type: String,  default: null },
  quantity: { type: Number ,  default: 1 },
  price: { type: Number ,   default: null  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

OrderSchema.pre('save', async function(next) {
  let Order = this;
  return next();
});

module.exports = mongoose.model('test_db', OrderSchema);
