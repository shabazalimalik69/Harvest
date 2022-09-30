const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
id: {type:String,required:true},
  project_name: {  type:String,required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },

  notes: { type: String },
  attachReceipt: { type: String }

});

const expensesModel = mongoose.model("expense", expensesSchema);

module.exports = expensesModel;
