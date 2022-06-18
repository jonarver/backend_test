const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  creation_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  edit_date: { type: Date, required: true },
  description: { type: String,  required: true },
  assigned: { type: String, required: true},
  Type: { type: String,  required: true },
});

TaskSchema.pre('save', async function(next) {
  let Test = this;
  return next();
});

module.exports = mongoose.model('task', TaskSchema);
