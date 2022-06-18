const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true ,unique: true},
  phone: { type: String  ,unique: true },
  password: { type: String, required: true, select: true },
  address: { type: String},
  latitude: { type: Number, default: null},
  longitude: { type: Number, default: null},
  device_id: { type: String, default: null},
  token: {type: String, default: null},
  resetPasswordToken: {type: String, default: null},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

UserSchema.pre('save', async function(next) {
  let user = this;
  if (!user.isModified('password')) return next();

  user.password = await bcrypt.hash(user.password, 10);
  return next();
});

module.exports = mongoose.model('users', UserSchema);
